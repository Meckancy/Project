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
        borderBottom: "none",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
      }}
    >
      <div className="container-fluid">
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

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold px-2 py-1 rounded ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
                style={{ 
                  transition: "all 0.2s ease",
                  color: darkMode ? "#fff" : "#333",
                  ...(location.pathname === "/" && {
                    color: darkMode ? "#c9bfff" : "#6f42c1",
                    backgroundColor: darkMode ? "#2f2f48" : "#f3e9ff",
                    fontWeight: "600"
                  })
                }}
              >
                Discover
              </Link>
            </li>

            <li className="nav-item dropdown position-static" ref={genreRef}>
              <div
                className="nav-link btn btn-link dropdown-toggle fw-semibold"
                style={{
                  textDecoration: "none",
                  color: darkMode ? "#fff" : "#333",
                  border: "none",
                  background: "none",
                  padding: "6px 10px"
                }}
                onClick={() => setShowGenres((prev) => !prev)}
              >
                Novels
              </div>
              {showGenres && (
                <div
                  className="dropdown-menu show genre-dropdown shadow"
                  style={{
                    display: "block",
                    background: darkMode ? "#2a2a40" : "#ffffff",
                    borderRadius: "8px",
                    padding: "10px"
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
            </li>
          </ul>

          <form className="d-flex me-3 align-items-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search books"
              style={{
                width: "160px",
                padding: "4px 8px",
                fontSize: "0.875rem",
                borderRadius: "6px",
                backgroundColor: darkMode ? "#343a40" : "#fff",
                color: darkMode ? "#fff" : "#000",
                border: "1px solid #ccc"
              }}
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
            <button
              className="btn btn-sm ms-2"
              type="button"
              style={{
                background: darkMode ? "#5f5fff" : "linear-gradient(90deg, #6f42c1, #5a5afc)",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "6px",
                fontWeight: 600
              }}
            >
              Search
            </button>
          </form>

          <div className="d-flex gap-2 align-items-center">
            <button
              className="btn btn-sm d-flex align-items-center justify-content-center"
              onClick={toggleTheme}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: darkMode ? "#2c2f33" : "#e2e6ea",
                border: "none",
                transition: "background-color 0.3s ease"
              }}
            >
              <i
                className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}
                style={{
                  fontSize: "1.2rem",
                  color: darkMode ? "#fcd34d" : "#343a40"
                }}
              ></i>
            </button>

            {!isLoggedIn ? (
              <>
                <button
                  className="btn btn-sm fw-semibold"
                  onClick={() => openModal("login")}
                  style={{
                    color: darkMode ? "#c9bfff" : "#6f42c1",
                    border: `1px solid ${darkMode ? "#8e79ff" : "#6f42c1"}`,
                    backgroundColor: "transparent",
                    padding: "6px 16px",
                    borderRadius: "6px",
                    transition: "background-color 0.3s ease"
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = darkMode ? "#2f2f48" : "#f3e9ff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  Sign In
                </button>
                <button
                  className="btn btn-sm fw-semibold"
                  onClick={() => openModal("register")}
                  style={{
                    background: darkMode ? "#6c5ce7" : "linear-gradient(90deg, #6f42c1, #5a5afc)",
                    color: "#fff",
                    border: "none",
                    padding: "6px 16px",
                    borderRadius: "6px"
                  }}
                >
                  Join
                </button>
              </>
            ) : (
              <button className="btn btn-danger btn-sm fw-semibold" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;