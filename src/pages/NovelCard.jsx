import React from "react";
import "./NovelCard.css";

const NovelCard = ({ title, author, genre, rating, chapters, cover, pdfLink }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  return (
    <div className="card novel-card shadow-sm">
      <img
        src={cover}
        className="card-img-top"
        alt={`Cover of ${title}`}
        onError={(e) => (e.target.src = "/Project/covers/default.jpg")}
        loading="lazy"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="mb-2 text-warning" style={{ fontSize: "1.1rem" }}>
          {renderStars()}
        </div>
        <p className="card-text mb-1"><strong>Author:</strong> {author}</p>
        <p className="card-text mb-1"><strong>Genre:</strong> {genre}</p>
        <p className="card-text mb-3"><strong>Chapters:</strong> {chapters ?? "N/A"}</p>
        <div className="mt-auto d-flex gap-2">
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read PDF
          </a>
          <a
            href={pdfLink}
            download={pdfLink.split("/").pop()}
            className="btn btn-sm btn-outline-secondary"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default NovelCard;
