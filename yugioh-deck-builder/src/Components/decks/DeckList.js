import React from "react";
import "reactjs-popup/dist/index";
import Popup from "reactjs-popup/dist/index";

function DeckList() {
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
                  <div className="modal border-2 p-4 rounded">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header">Create New Deck</div>
                    <div className="actions">
                      <Popup
                        trigger={<button className="button"> Trigger </button>}
                        position="top center"
                        nested
                      >
                      <div className="w-max h-max border-2">
                        <input type="text" className="w-max h-auto"/>
                      </div>
                      </Popup>
                      <button
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        close modal
                      </button>
                    </div>
                  </div>
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
            <p>Name of deck</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckList;
