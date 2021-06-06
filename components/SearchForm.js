import { useState } from "react";

import styles from "../styles/Home.module.css";

const SearchForm = props => {
  const { setCharacters, initialCharacters } = props;
  const [search, setSearch] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const results = await fetch("/api/searchCharacters", {
      method: "post",
      body: search
    });
    const { characters } = await results.json();

    setCharacters(characters);
  };

  const handleRest = event => {
    event.preventDefault();

    setSearch("");
    setCharacters(initialCharacters);
  };

  return (
    <section className={styles.searchForm}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          value={search}
          border="none"
          onChange={e => setSearch(e.target.value)}
        />
        <button type="reset" name="reset" onClick={handleRest}>
          X
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
