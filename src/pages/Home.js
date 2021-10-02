import React, { useState } from "react";
import Rule from "../components/Rule";
import Modal from "react-modal";
import main from "../media/audios/Main.mp3";
import Player from "../components/Player";
function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement("#root");
  return (
    <div className="container relative mx-auto py-5 flex flex-col justify-center items-center">
      <div
        id="list"
        className="container bg-lightBlack 2xl:h-primary lg:h-secondary rounded-lg mx-auto w-3/5  pt-2"
      >
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
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
            backgroundColor: "#111",
            height: "500px",
            width: "600px",
            top: "50%",
            opacity: 1,
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
        <h2 className="text-xl text-white">Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
      <div className="absolute bottom-0 left-2">
        <Player url={main} />
      </div>
    </div>
  );
}

export default Home;
