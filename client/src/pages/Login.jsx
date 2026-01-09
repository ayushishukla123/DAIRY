import React from "react";
import "../assets/css/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ IMPORTANT: save user for header & session
        localStorage.setItem("user", JSON.stringify(data));

        alert(`Welcome ${data.name} ✅`);
        navigate("/"); // home page
      } else {
        alert(data.message || "Login failed ❌");
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

      {/* Login Box */}
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
            <p>Access your dairy account</p>
          </div>

          <form className="harmony-form" onSubmit={handleSubmit}>
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
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="harmony-button">
              Login
            </button>
          </form>

          <div className="natural-social">
            <button className="earth-social">Google</button>
            <button className="earth-social">Facebook</button>
          </div>

          <div className="nurture-signup">
            <span>New user? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
