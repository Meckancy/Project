import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import { ThemeContext } from "../ThemeContext"; // Adjust path if needed

const PagesWrapper = ({
  activeModal,
  openModal,
  closeModal,
  selectedGenre,
  searchQuery,
}) => {
  const { darkMode } = useContext(ThemeContext);

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

  const modalBoxStyle = {
    backgroundColor: darkMode ? "#2a2a40" : "#ffffff",
    color: darkMode ? "#f1f1f1" : "#222",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 0 20px rgba(255, 255, 255, 0.1)"
      : "0 0 16px rgba(0, 0, 0, 0.15)",
    width: "90%",
    maxWidth: "400px",
    fontFamily: "system-ui, sans-serif",
    transition: "all 0.3s ease",
  };

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
          <div style={modalBoxStyle} onClick={(e) => e.stopPropagation()}>
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
