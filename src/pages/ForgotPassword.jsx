import React, { useState } from "react";

function ForgotPassword({ closeModal }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("If this email exists, a reset link has been sent.");
    setEmail("");
    closeModal();
  };

  return (
    <div
      className="bg-white p-4 rounded shadow"
      style={{ width: "100%", maxWidth: "430px" }}
    >
      <h2 className="fw-bold mb-2 text-center">Forgot Password?</h2>
      <p className="mb-4 text-muted text-center">
        Enter your email address to reset your password.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label text-dark">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              height: "44px",
              borderRadius: "8px",
              backgroundColor: "#f2f2f2",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#5a5afc",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            height: "44px",
            borderRadius: "8px",
          }}
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center mt-3 text-dark">
        Remembered your password?{" "}
        <button
          type="button"
          onClick={() => closeModal("login")}
          className="btn btn-link p-0 m-0"
          style={{ color: "#5a5afc", textDecoration: "none" }}
        >
          Login here
        </button>
      </p>
    </div>
  );
}

export default ForgotPassword;
