import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar placeholder="Search Mystery Movies..." data={BookData} />
    </div>
  );
}

export default App;
