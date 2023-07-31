import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index";
import Popup from "reactjs-popup/dist/index";
import { Navigate, useNavigate } from 'react-router-dom'
import { db } from "../../Firebase/firebase";
import { isLoggedIn } from '../../Firebase/auth'
import { setDoc, doc, collection, getDocs, addDoc, query, where } from "firebase/firestore";

function DeckList() {
  const [decks, setDecks] = useState();
  const [input, setInput] = useState();
  const userLoggedIn = isLoggedIn()
  const navigate = useNavigate(0)

  

  const getDecks = async () => {
    try{
      const decksRef = collection(db, 'Decks')
      const querySnapshot = await getDocs(decksRef)
      const decksData = querySnapshot.docs.map((doc) => doc.data())
      setDecks(decksData)
    } catch (error){
      console.error('Error getting decks: ', error);
    }
  };

  useEffect(() => {
    if(!userLoggedIn){
      navigate('/login')
    } else{
      getDecks();
    }
  }, [navigate, userLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDeckName = input.trim();

    if (newDeckName) {

      const deckExists = decks.some((deck) => deck.name === newDeckName)

      if(deckExists){
        alert('Deck name already exists. Please choose a different name')
        return
      }

      try {
        await addDoc(doc(db, "Decks", newDeckName), { name: newDeckName });
        setInput("");
        getDecks();
      } catch (error) {
        console.log("Error adding new deck", error);
      }
    } else {
      console.warn("Deck name cannot be empty!");
      alert('Deck name cannot be empty!')
    }
  };

  console.log(input);

  return (
    <>
      <div className="h-full w-full flex justify-center align-middle w-full h-full p-2">
        <div className="box-border border-2 box-shadow-md w-[50rem] h-full p-2">
          <div className="font-bold flex justify-center">
            <h1>Decks</h1>
          </div>
          <div className="flex flex-col justify-center align-middle gap-2">
            <input
              type="text"
              name="Search"
              placeholder="Search deck..."
              className="border-2 p-2"
            />
            <div className="flex justify-start align-middle gap-3">
              <Popup
                trigger={
                  <a
                    href="#"
                    className="box-border border-2 border-transparent w-max h-max bg-green-500 text-white py-2 px-1 rounded"
                  >
                    Create
                  </a>
                }
                modal
                nested
              >
                {(close) => (
                  <form onSubmit={handleSubmit}>
                    <div className="modal border-2 p-4 rounded">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="header font-bold my-2">
                        Create a New Deck
                      </div>
                      <div className="actions">
                        <div className="w-max h-max border-2">
                          <input
                            type="text"
                            placeholder="Deck name..."
                            className="w-max h-auto border-2 p-2"
                            onChange={(e) => setInput(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-start gap-3 my-2">
                          <button className="box-border border-2 border-transparent w-max h-max bg-green-500 text-white py-2 px-1  rounded">
                            Create
                          </button>
                          <button
                            className="box-border border-2 border-transparent w-max h-max bg-red-500 text-white py-2 px-1 rounded"
                            onClick={() => {
                              console.log("modal closed ");
                              close();
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Popup>
              <a
                href="#"
                className="box-border border-2 border-transparent w-max h-max bg-red-500 text-white py-2 px-1 rounded"
              >
                Delete
              </a>
            </div>
          </div>
          <div className="box-border border-2 border-black flex flex-col justify-center align-middle my-4 p-2">
            <p>Your Decks</p>
            {decks ? (
              <ul>
                {decks.map((deck) => (
                  <li key={deck.id}>
                    {deck.name}
                    {/*<button onClick={() => handleUpdate(deck.id, deck.name)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(deck.id)}>Delete</button>*/}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-extralight text-sm italic">No decks available...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckList;
