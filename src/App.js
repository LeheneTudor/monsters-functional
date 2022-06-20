import { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchStr, setSearchStr] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState("Search for a monster!");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchStr)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchStr]);

  const onSearchChange = (event) => {
    const searchStr = event.target.value?.toLowerCase();

    setSearchStr(searchStr);
  };

  const onTitleChange = (event) => {
    const newTitle = event.target.value;

    setTitle(newTitle);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Change title"
        className="search-box"
      />
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
