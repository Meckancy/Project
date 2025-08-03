import React, { useState, useContext } from "react";
import "./Login.css";
import { ThemeContext } from "../ThemeContext"; // adjust path if needed

function Login({ closeModal, openModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    closeModal();
  };

  const light = {
    background: "#fff",
    text: "#111",
    muted: "#6c757d",
    input: "#f8f8f8",
    border: "#ccc",
    link: "#5a5afc"
  };

  const dark = {
    background: "#2a2a40",
    text: "#f1f1f1",
    muted: "#aaa",
    input: "#3c3c5a",
    border: "#555",
    link: "#9a9aff"
  };

  const theme = darkMode ? dark : light;

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "420px", width: "100%" }}>
        <div
          className="modal-content"
          style={{
            borderRadius: "12px",
            border: `1px solid ${theme.border}`,
            padding: "24px 20px",
            backgroundColor: theme.background,
            color: theme.text
          }}
        >
          <div className="modal-header border-0 p-0 mb-3">
            <h5 className="modal-title fw-bold">Welcome back!</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              style={{ filter: darkMode ? "invert(1)" : "none" }}
            ></button>
          </div>

          <div className="modal-body pt-0 px-0">
            <p className="mb-4 text-center small" style={{ color: theme.muted }}>
              Enter to get unlimited access to data & information.
            </p>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-3 text-start">
                <label className="form-label small" style={{ color: theme.text }}>
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: theme.input,
                    border: `1px solid ${theme.border}`,
                    color: theme.text
                  }}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3 text-start">
                <label className="form-label small" style={{ color: theme.text }}>
                  Password <span className="text-danger">*</span>
                </label>
                <div
                  className="position-relative"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: theme.input,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-0 bg-transparent"
                    placeholder="Enter your password"
                    style={{
                      height: "44px",
                      paddingRight: "40px",
                      color: theme.text
                    }}
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                    style={{ cursor: "pointer", color: theme.muted }}
                    onClick={togglePassword}
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </span>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check small">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                    style={{ color: theme.text }}
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => openModal("forgotPassword")}
                  className="btn btn-link p-0 m-0 small"
                  style={{ color: theme.link, textDecoration: "none" }}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 fw-semibold"
                style={{
                  background: "linear-gradient(90deg, #6f42c1, #5a5afc)",
                  border: "none",
                  color: "#fff",
                  height: "44px",
                  borderRadius: "8px"
                }}
              >
                Log In
              </button>
            </form>

            {/* Register */}
            <p className="text-center mt-4 small" style={{ color: theme.text }}>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => openModal("register")}
                className="btn btn-link p-0 m-0"
                style={{ color: theme.link, textDecoration: "none" }}
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
