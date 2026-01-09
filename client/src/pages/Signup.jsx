import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";

function Signup() {
  const navigate = useNavigate(); // ✅ added

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful ✅");
        e.target.reset();
        navigate("/login"); // ✅ ab kaam karega
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      {/* Left Illustration */}
      <div className="login-left">
        <img src="/images/cow.jpeg" alt="Dairy Illustration" />
      </div>

      {/* Background drops */}
      <div className="nature-background">
        <div className="floating-drop drop-1"></div>
        <div className="floating-drop drop-2"></div>
        <div className="floating-drop drop-3"></div>
        <div className="floating-drop drop-4"></div>
      </div>

      {/* Signup Box */}
      <div className="login-container">
        <div className="wellness-card">
          <div className="mindful-header">
            <div className="dairy-logo">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle
                  cx="28"
                  cy="28"
                  r="26"
                  stroke="#4caf50"
                  strokeWidth="2"
                  opacity="0.6"
                />
                <circle
                  cx="28"
                  cy="28"
                  r="18"
                  stroke="#4caf50"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle cx="28" cy="28" r="10" fill="#4caf50" opacity="0.9" />
              </svg>
            </div>
            <h1>Dairy Portal</h1>
            <p>Create your account</p>
          </div>

          {/* ✅ Add onSubmit and name attributes */}
          <form className="harmony-form" onSubmit={handleSubmit}>
            <div className="organic-field">
              <label>Full Name</label>
              <input type="text" name="name" required autoComplete="name" />
            </div>

            <div className="organic-field">
              <label>Email Address</label>
              <input type="email" name="email" required autoComplete="email" />
            </div>

            <div className="organic-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                autoComplete="new-password"
              />
            </div>

            <div className="organic-field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                required
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="harmony-button">
              Sign Up
            </button>
          </form>

          <div className="natural-social">
            <button className="earth-social">Google</button>
            <button className="earth-social">Facebook</button>
          </div>

          <div className="nurture-signup">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
