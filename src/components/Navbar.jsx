import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Navbar.css";

const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical",
  "Horror", "Mystery", "Psychological", "Romance", "Sci-fi",
  "Slice of Life", "Sports", "Supernatural",
];

const Navbar = ({ openModal, onGenreSelect, searchQuery, onSearch }) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const genreRef = useRef();
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(status);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (genreRef.current && !genreRef.current.contains(e.target)) {
        setShowGenres(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const handleGenreClick = (genre) => {
    setShowGenres(false);
    if (onGenreSelect) onGenreSelect(genre);
  };

  const hideNavbarPaths = ["/forgot-password"];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  return (
    <nav
      className={`navbar navbar-expand-lg px-2 py-2 ${darkMode ? "navbar-dark" : "navbar-light"}`}
      style={{
        background: darkMode ? "#1c1c28" : "linear-gradient(to right, #f8f9fa, #e0e0ff)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">

        {/* Left Side: Brand + Discover + Novels */}
        <div className="d-flex align-items-center gap-3">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            style={{
              fontFamily: "serif",
              fontSize: "1.5rem",
              color: darkMode ? "#fff" : "#000"
            }}
          >
            NovelWeb
          </Link>

          <Link
            className={`nav-link fw-semibold px-2 py-1 rounded ${
              location.pathname === "/" ? "active text-primary bg-light" : ""
            }`}
            to="/"
            style={{ fontSize: "0.9rem", color: darkMode ? "#ddd" : "#333" }}
          >
            Discover
          </Link>

          <div className="nav-item dropdown position-static" ref={genreRef}>
            <div
              className="nav-link btn btn-link dropdown-toggle fw-semibold"
              style={{
                fontSize: "0.9rem",
                textDecoration: "none",
                color: darkMode ? "#fff" : "#333",
                background: "none",
                border: "none",
                padding: "4px 8px"
              }}
              onClick={() => setShowGenres((prev) => !prev)}
            >
              Novels
            </div>
            {showGenres && (
              <div
                className="dropdown-menu show genre-dropdown shadow"
                style={{
                  background: darkMode ? "#2a2a40" : "#ffffff",
                  borderRadius: "8px",
                  padding: "10px",
                  zIndex: 999
                }}
              >
                <div className="genre-grid">
                  <a href="#" className="genre-link" onClick={(e) => { e.preventDefault(); handleGenreClick("All"); }}>
                    All
                  </a>
                  {genres.map((genre) => (
                    <a key={genre} href="#" className="genre-link" onClick={(e) => { e.preventDefault(); handleGenreClick(genre); }}>
                      {genre}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Search + Theme + Auth */}
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search books"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              style={{
                backgroundColor: darkMode ? "#343a40" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "0.875rem",
                padding: "4px 10px",
                width: "160px"
              }}
            />
            <button
              type="button"
              className="ms-2"
              style={{
                background: darkMode ? "#5f5fff" : "linear-gradient(90deg, #6f42c1, #5a5afc)",
                color: "#fff",
                border: "none",
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 600
              }}
            >
              Search
            </button>
          </form>

          <button
            onClick={toggleTheme}
            title={darkMode ? "Light Mode" : "Dark Mode"}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: darkMode ? "#2c2f33" : "#e2e6ea",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`} style={{ color: darkMode ? "#fcd34d" : "#343a40" }}></i>
          </button>

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => openModal("login")}
                style={{
                  color: darkMode ? "#c9bfff" : "#6f42c1",
                  border: `1px solid ${darkMode ? "#8e79ff" : "#6f42c1"}`,
                  backgroundColor: "transparent",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: 500
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => openModal("register")}
                style={{
                  background: darkMode ? "#6c5ce7" : "linear-gradient(90deg, #6f42c1, #5a5afc)",
                  color: "#fff",
                  border: "none",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: 500
                }}
              >
                Join
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-sm fw-semibold"
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                padding: "4px 12px",
                border: "none",
                borderRadius: "6px",
                fontSize: "0.875rem"
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
