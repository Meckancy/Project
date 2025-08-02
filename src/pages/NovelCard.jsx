import React from "react";
import "./NovelCard.css";

const NovelCard = ({ title, author, genre, rating, chapters, cover, pdfLink }) => {
  const resolvedCover = `${import.meta.env.BASE_URL}${cover.startsWith("/") ? cover.slice(1) : cover}`;
  const resolvedPdf = `${import.meta.env.BASE_URL}${pdfLink.startsWith("/") ? pdfLink.slice(1) : pdfLink}`;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  return (
    <div className="card novel-card shadow-sm">
      <img
        src={resolvedCover}
        alt={`Cover of ${title}`}
        className="card-img-top"
        loading="lazy"
        onError={(e) => {
          e.target.src = `${import.meta.env.BASE_URL}covers/default.jpg`;
        }}
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
            href={resolvedPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read PDF
          </a>
          <a
            href={resolvedPdf}
            download
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
