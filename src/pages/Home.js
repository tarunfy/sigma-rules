import React, { useState } from "react";
import Rule from "../components/Rule";
import Modal from "react-modal";
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
        className="absolute right-0 bottom-2 font-Roboto bg-lightBlack text-tertiary font-semibold text-xl rounded-md py-2 px-4 flex items-center justify-center transform transition duration-500 hover:scale-110 hover:bg-tertiary hover:text-secondary"
        onClick={() => setModalIsOpen(true)}
      >
        Add
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
    </div>
  );
}

export default Home;
