import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const PagesWrapper = ({
  activeModal,
  openModal,
  closeModal,
  selectedGenre,
  searchQuery,
}) => {
  const switchModal = (modalName) => {
    closeModal();
    setTimeout(() => {
      openModal(modalName);
    }, 100);
  };

  return (
    <>
      <Home selectedGenre={selectedGenre} searchQuery={searchQuery} />

      {activeModal && (
        <div style={overlayStyle} onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            {activeModal === "login" && (
              <Login closeModal={closeModal} openModal={switchModal} />
            )}
            {activeModal === "register" && (
              <Register closeModal={closeModal} openModal={switchModal} />
            )}
            {activeModal === "forgotPassword" && (
              <ForgotPassword closeModal={closeModal} openModal={switchModal} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PagesWrapper;
