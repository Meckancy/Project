import React, { useState } from "react";
import "./Login.css";

function Login({ closeModal, openModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    closeModal();
  };

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
            border: "1px solid #ddd",
            padding: "24px 20px",
            backgroundColor: "#fff"
          }}
        >
          <div className="modal-header border-0 p-0 mb-3">
            <h5 className="modal-title fw-bold text-dark">Welcome back!</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>

          <div className="modal-body pt-0 px-0">
            <p className="text-muted mb-4 text-center small">
              Enter to get unlimited access to data & information.
            </p>

            <form onSubmit={handleLogin}>
              {/* Email */}
              <div className="mb-3 text-start">
                <label className="form-label text-dark small">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f8f8",
                    border: "1px solid #ccc"
                  }}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3 text-start">
                <label className="form-label text-dark small">
                  Password <span className="text-danger">*</span>
                </label>
                <div
                  className="position-relative"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#f8f8f8",
                    border: "1px solid #ccc"
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-0 bg-transparent"
                    placeholder="Enter your password"
                    style={{ height: "44px", paddingRight: "40px" }}
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                    style={{ cursor: "pointer", color: "#666" }}
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
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => openModal("forgotPassword")}
                  className="btn btn-link p-0 m-0 small"
                  style={{ color: "#5a5afc", textDecoration: "none" }}
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
            <p className="text-center mt-4 text-dark small">
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => openModal("register")}
                className="btn btn-link p-0 m-0"
                style={{ color: "#5a5afc", textDecoration: "none" }}
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
