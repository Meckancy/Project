import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
    if (onGenreSelect) {
      onGenreSelect(genre);
    }
  };

  const hideNavbarPaths = ["/forgot-password"];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-0" style={{ borderBottom: "1px solid #dee2e6" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" to="/" style={{ fontFamily: "serif", fontSize: "1.5rem" }}>
          NovelWeb
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold d-flex align-items-center gap-1 ${location.pathname === "/" ? "active text-primary" : ""}`}
                to="/"
              >
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>

            <li className="nav-item dropdown position-static" ref={genreRef}>
              <div
                className="nav-link btn btn-link dropdown-toggle fw-semibold d-flex align-items-center gap-1"
                style={{ textDecoration: "none", color: "#333", border: "none", background: "none" }}
                onClick={() => setShowGenres((prev) => !prev)}
              >
                <i className="bi bi-tags"></i> Genre
              </div>
              {showGenres && (
                <div className="dropdown-menu show genre-dropdown" style={{ display: "block" }}>
                  <div className="genre-grid">
                    <a href="#" className="genre-link" onClick={(e) => { e.preventDefault(); handleGenreClick("All"); }}>All</a>
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

          <form className="d-flex me-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search books"
              style={{ width: "200px" }}
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
            <button
              className="btn btn-sm ms-2"
              type="button"
              style={{
                background: "linear-gradient(90deg, #6f42c1, #5a5afc)",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                fontWeight: 600
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-flex gap-2">
            {!isLoggedIn ? (
              <>
                <button
                  className="btn btn-sm fw-semibold"
                  onClick={() => openModal("login")}
                  style={{
                    color: "#6f42c1",
                    border: "1px solid #6f42c1",
                    backgroundColor: "transparent",
                    padding: "6px 16px",
                    borderRadius: "6px"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#f3e9ff"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                >
                  Sign In
                </button>
                <button
                  className="btn btn-sm fw-semibold"
                  onClick={() => openModal("register")}
                  style={{
                    background: "linear-gradient(90deg, #6f42c1, #5a5afc)",
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
              <button className="btn btn-danger btn-sm fw-semibold" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
