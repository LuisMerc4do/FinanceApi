import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card/Card";
import CardList from "./CardList/CardList";
import Search from "./Search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <CardList />
    </div>
  );
}

export default App;
