import React, { useState } from "react";
import "./Register.css";

function Register({ closeModal, openModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleRegister = (e) => {
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
        justifyContent: "center",
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div
          className="modal-content"
          style={{
            borderRadius: "12px",
            border: "1px solid #ddd",
            padding: "24px 20px",
          }}
        >
          <div className="modal-header border-0 p-0 mb-3">
            <h5 className="modal-title fw-bold text-dark">Create an Account</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>

          <div className="modal-body pt-0 px-0">
            <p className="text-muted mb-4 text-center small">
              Join us and start your journey today!
            </p>

            <form onSubmit={handleRegister}>
              {/* Full Name */}
              <div className="mb-3 text-start">
                <label className="form-label text-dark small">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  style={{
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ccc",
                  }}
                  required
                />
              </div>

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
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ccc",
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
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ccc",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control border-0 bg-transparent"
                    placeholder="Create a password"
                    style={{ height: "44px", paddingRight: "40px" }}
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                    style={{ cursor: "pointer", color: "#666" }}
                    onClick={togglePassword}
                  >
                    <i
                      className={`bi ${
                        showPassword ? "bi-eye-slash" : "bi-eye"
                      }`}
                    ></i>
                  </span>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-3 text-start">
                <label className="form-label text-dark small">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <div
                  className="position-relative"
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #ccc",
                  }}
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control border-0 bg-transparent"
                    placeholder="Confirm your password"
                    style={{ height: "44px", paddingRight: "40px" }}
                    required
                  />
                  <span
                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                    style={{ cursor: "pointer", color: "#666" }}
                    onClick={toggleConfirmPassword}
                  >
                    <i
                      className={`bi ${
                        showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                      }`}
                    ></i>
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-100"
                style={{
                  background: "linear-gradient(90deg, #6f42c1, #5a5afc)",
                  border: "none",
                  color: "#fff",
                  height: "44px",
                  borderRadius: "8px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4a4ae0")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#5a5afc")}
              >
                Register
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center mt-4 text-dark small">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => openModal("login")}
                className="btn btn-link p-0 m-0"
                style={{ color: "#5a5afc", textDecoration: "none" }}
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
