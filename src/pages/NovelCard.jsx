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
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <div className="text-warning">{renderStars()}</div>
        <p className="card-text"><strong>Author:</strong> {author}</p>
        <p className="card-text"><strong>Genre:</strong> {genre}</p>
        <p className="card-text"><strong>Chapters:</strong> {chapters ?? "N/A"}</p>
        <div className="d-flex gap-2 mt-auto">
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-read-pdf"
          >
            Read PDF
          </a>
          <a
            href={pdfLink}
            download={pdfLink.split("/").pop()}
            className="btn btn-outline-secondary"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default NovelCard;
