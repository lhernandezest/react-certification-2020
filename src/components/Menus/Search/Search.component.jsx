import React, { useState, useContext } from 'react';
import './Search.sass';
import SearchIcon from '../../../assets/search-icon.svg';

import VideosContext from '../../../state/VideosContext';

const Search = () => {
  const { state, dispatch } = useContext(VideosContext);
  const [search, setSearch] = useState(state.currentSearch);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_CURRENT_SEARCH',
      payload: search,
    });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="TopMenu-Search">
      <img
        className="TopMenu-Search-icon"
        src={SearchIcon}
        alt=""
        onClick={handleSubmit}
        aria-hidden="true"
      />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
