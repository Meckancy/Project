import React, { useState, useEffect } from "react";
import NovelCard from "./NovelCard";

const basePath = "/Project";

const rawNovels = [
  {
      title: "Life of Pi",
      author: "Yann Martel",
      genre: "Adventure ,Philosophical fiction",
      rating: 4.5,
      chapters: 100,
      cover: "/covers/life_of_pi.jpg",
      pdfLink: "/pdfs/life_of_pi.pdf",
    },
    {
      title: "The Call of the Wild",
      author: "Jack London",
      genre: "Adventure Fiction",
      rating: 4.3,
      chapters: 7,
      cover: "covers/the_call_of_the_wild.jpg",
      pdfLink: "pdfs/the_call_of_the_wild.pdf",
    },
    {
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      genre: "Adventure Fiction, Romance, Historical",
      rating: 4.8,
      chapters: 117,
      cover: "covers/the_count_of_monte_cristo.jpg",
      pdfLink: "pdfs/the_count_of_monte_cristo.pdf",
    },
    {
      title: "Treasure Island",
      author: "Robert Louis Stevenson ",
      genre: "Adventure fiction, Young adult literature",
      rating: 4.1,
      chapters: 34,
      cover: "covers/treasure_island.webp",
      pdfLink: "pdfs/treasure_island.pdf",
    },
    {
      title: "Three Man in a Boat",
      author: " Jerome K. Jerome",
      genre: "Adventure fiction",
      rating: 3.8,
      chapters: 34,
      cover: "covers/three_man_in_a_boat.webp",
      pdfLink: "pdfs/three_man_in_a_boat.pdf",
    },
    {
      title: "Right ho Jeeves",
      author: "P.G. WODEHOUSE",
      genre: "Comedy",
      rating: 4.3,
      chapters: 23,
      cover: "covers/right_ho_jeeves.jpg",
      pdfLink: "pdfs/right_ho_jeeves.pdf",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Drama",
      rating: 4.3,
      chapters: 61,
      cover: "covers/pride_and_prejudice.jpg",
      pdfLink: "pdfs/pride_and_prejudice.pdf",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      genre: "Drama",
      rating: 4.2,
      chapters: 38,
      cover: "covers/jane_eyre.jpg",
      pdfLink: "pdfs/jane_eyre.pdf",
    },
    {
      title: "Alice in Wonderland",
      author: "Lewis Carroll",
      genre: "Fantasy",
      rating: 4.5,
      chapters: 12,
      cover: "covers/alice_in_wonderland.jpg",
      pdfLink: "pdfs/alice_in_wonderland.pdf",
    },
    {
      title: "Phantastes",
      author: "George MacDonald",
      genre: "Fantasy",
      rating: 3.9,
      chapters: 9,
      cover: "covers/phantastes.jpg",
      pdfLink: "pdfs/phantastes.pdf",
    },
    {
      title: "A Tale of Two Cities",
      author: "Charles Dickens",
      genre: "Historical",
      rating: 4.4,
      chapters: 45,
      cover: "covers/a_tale_of_two_cities.jpg",
      pdfLink: "pdfs/a_tale_of_two_cities.pdf",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical",
      rating: 4.4,
      chapters: 361,
      cover: "covers/war_and_peace.jpg",
      pdfLink: "pdfs/war_and_peace.pdf",
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Horror",
      rating: 4.0,
      chapters: 24,
      cover: "covers/frankenstein.jpg",
      pdfLink: "pdfs/frankenstein.pdf",
    },
    {
      title: "The Turn of the Screw",
      author: "Henry James",
      genre: "Horror",
      rating: 3.4,
      chapters: 24,
      cover: "covers/the_turn_of_the_screw.jpg",
      pdfLink: "pdfs/the_turn_of_the_screw.pdf",
    },
    {
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Mystery",
      rating: 4.8,
      chapters: 12,
      cover: "covers/the_adventures_of_sherlock_holmes.jpg",
      pdfLink: "pdfs/the_adventures_of_sherlock_holmes.pdf",
    },
    {
      title: "The Moonstone",
      author: "Wilkie Collins",
      genre: "Mystery",
      rating: 3.9,
      chapters: 59,
      cover: "covers/the_moonstone.jpg",
      pdfLink: "pdfs/the_moonstone.pdf",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Psychological",
      rating: 4.3,
      chapters: 39,
      cover: "covers/crime_and_punishment.jpg",
      pdfLink: "pdfs/crime_and_punishment.pdf",
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      genre: "Psychological",
      rating: 4.5,
      chapters: 20,
      cover: "covers/picture_of_dorian_gray.jpg",
      pdfLink: "pdfs/picture_of_dorian_gray.pdf",
    },
    {
      title: "Persuasion",
      author: "Jane Austen",
      genre: "Romance",
      rating: 4.3,
      chapters: 24,
      cover: "covers/persuasion.jpg",
      pdfLink: "pdfs/persuasion.pdf",
    },
    {
      title: "The Scarlet Pimpernel",
      author: "Baroness Orczy",
      genre: "Romance",
      rating: 4.1,
      chapters: 31,
      cover: "covers/scarlet_pimpernel.jpg",
      pdfLink: "pdfs/scarlet_pimpernel.pdf",
    },
    {
      title: "The War of the Worlds",
      author: " H. G. Wells",
      genre: "Sci-fi",
      rating: 4.5,
      chapters: 27,
      cover: "covers/the_war_of_the_worlds.jpg",
      pdfLink: "pdfs/the_war_of_the_worlds.pdf",
    },
    {
      title: "Twenty Thousand Leagues Under the Sea",
      author: "Jules Verne",
      genre: "Sci-fi",
      rating: 4.3,
      chapters: 47,
      cover: "covers/twenty_thousand_leagues_under_the_sea.jpg",
      pdfLink: "pdfs/twenty_thousand_leagues_under_the_sea.pdf",
    },
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      genre: "Slice Of Life",
      rating: 4.6,
      chapters: 47,
      cover: "covers/little_women.jpg",
      pdfLink: "pdfs/little_women.pdf",
    },
    {
      title: "Anne of Green Gables",
      author: "Lucy Maud Montgomery",
      genre: "Slice Of Life",
      rating: 4.8,
      chapters: 38,
      cover: "covers/anne_of_the_green_gables_montogomery.webp",
      pdfLink: "pdfs/anne_of_the_green_gables_montogomery.pdf",
    },
    {
      title: "The Game",
      author: "Jack London",
      genre: "Sports",
      rating: 3.7,
      cover: "covers/the_game.jpg",
      pdfLink: "pdfs/the_game.pdf",
    },
    {
      title: "Carmilla",
      author: "Sheridan Le Fanu",
      genre: "Supernatural",
      rating: 3.9,
      chapters: 16,
      cover: "covers/carmilla.jpg",
      pdfLink: "pdfs/carmilla.pdf",
    },
    {
      title: "The Phantom of the Opera",
      author: " Gaston Leroux",
      genre: "Supernatural",
      rating: 4.5,
      chapters: 26,
      cover: "covers/phantom.jpg",
      pdfLink: "pdfs/phantom.pdf",
    },
];

// Apply basePath prefix
const allNovels = rawNovels.map((novel) => ({
  ...novel,
  cover: `${basePath}/${novel.cover}`,
  pdfLink: `${basePath}/${novel.pdfLink}`,
}));

const Home = ({ selectedGenre = "All", searchQuery = "" }) => {
  const [filteredNovels, setFilteredNovels] = useState(allNovels);

  const normalize = (text) =>
    text.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();

  useEffect(() => {
    const genreFilter = normalize(selectedGenre);
    const queryFilter = normalize(searchQuery);

    const filtered = allNovels.filter(({ genre, title, author }) => {
      const normalizedGenre = normalize(genre);
      const normalizedTitle = normalize(title);
      const normalizedAuthor = normalize(author);

      const matchesGenre =
        genreFilter === "all" || normalizedGenre.includes(genreFilter);

      const matchesSearch =
        !queryFilter ||
        normalizedTitle.includes(queryFilter) ||
        normalizedAuthor.includes(queryFilter);

      return matchesGenre && matchesSearch;
    });

    setFilteredNovels(filtered);
  }, [selectedGenre, searchQuery]);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="container my-4 flex-grow-1">
        <div style={{ maxHeight: "75vh", overflowY: "auto", paddingRight: "8px" }}>
          <div className="d-flex flex-wrap gap-4 justify-content-start">
            {filteredNovels.length > 0 ? (
              filteredNovels.map((novel, index) => (
                <NovelCard key={index} {...novel} />
              ))
            ) : (
              <p className="text-muted">No novels found.</p>
            )}
          </div>
        </div>
      </div>

      <footer className="text-center text-muted py-3" style={{ borderTop: "1px solid #dee2e6" }}>
        © {new Date().getFullYear()} NovelWeb. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
