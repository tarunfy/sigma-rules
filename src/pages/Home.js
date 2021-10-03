import React, { useState } from "react";
import Rule from "../components/Rule";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import Player from "../components/Player";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");

  return (
    <div id="something">
      <Navbar />
      <div className=" container relative mx-auto py-5 flex flex-col justify-start items-center">
        <div
          id="list"
          className="container bg-lightBlack 2xl:h-primary lg:h-secondary rounded-lg mx-auto w-3/5  pt-2"
        >
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <Rule />
          ))}
        </div>
        <button
          className="absolute right-0 bottom-2 font-Roboto bg-tertiary text-white font-medium text-xl rounded-xl py-2 px-4 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:opacity-90 hover:shadow-primary"
          onClick={() => setModalIsOpen(true)}
        >
          Create Rule
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              backgroundColor: "white",
              height: "400px",
              width: "500px",
              top: "50%",
              opacity: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              border: "none",
              borderRadius: "1rem",
            },
          }}
        >
          <h1 className="text-center text-2xl font-Montserrat font-bold">
            Define your own sigma rule
          </h1>
          <span className="text-4xl">📝</span>
          <form className="mb-0 space-y-6  w-3/4 mt-8">
            <div>
              <div className="mb-2">
                <label
                  htmlFor="rulenum"
                  className="block text-sm font-medium text-gray-900"
                >
                  Rule Number
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="rulenum"
                    autoComplete="off"
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                  />
                </div>
              </div>
              <label
                htmlFor="rule"
                className="block text-sm font-medium text-gray-900"
              >
                Rule
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  autoComplete="off"
                  id="rule"
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm bg-secondary  font-Roboto font-bold text-xl text-white text-center rounded-lg focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-black hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                Add
              </button>
            </div>
          </form>
        </Modal>
        <div className="absolute bottom-0 left-2">
          <Player />
        </div>
      </div>
    </div>
  );
}

export default Home;
