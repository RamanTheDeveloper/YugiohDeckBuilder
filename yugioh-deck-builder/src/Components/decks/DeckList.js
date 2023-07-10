import React, { useState } from "react";
import "reactjs-popup/dist/index";
import Popup from "reactjs-popup/dist/index";
import { db, firestore } from "../../Firebase/firebase";
import {doc, setDoc, collection} from 'firebase/firestore'

function DeckList() {
  const [decks, setDecks] = useState();
  const [newDeck, setNewDeck] = useState();
  const [input, setInput] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firestore.collection(db, "Decks").add({ name: newDeck });
    /*await setDoc(doc(db, "Decks", "Name"), {
      name: input
    })*/
    setNewDeck(input);
    getDecks();
  };

  const getDecks = async () => {
    const decksRef = await firestore.collection("Decks").get();
    const decksData = decksRef.docs.map((doc) => doc.data());
    setDecks(decksData);
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
            {/*<ul>
              {decks.map((deck) => (
                <li key={deck.id}>
                  {deck.name}
                  <button onClick={() => handleUpdate(deck.id, deck.name)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(deck.id)}>Delete</button>
                </li>
              ))}
            </ul>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckList;
