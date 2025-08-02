import { useState } from "react";
import Navbar from "./components/Navbar";
import PagesWrapper from "./pages/PagesWrapper";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState(null); 
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar
        openModal={setActiveModal}
        onGenreSelect={setSelectedGenre}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}  
      />

      <PagesWrapper
        activeModal={activeModal}
        openModal={openModal}
        closeModal={closeModal}
        selectedGenre={selectedGenre}
        searchQuery={searchQuery}
      />
    </>
  );
}

export default App;
