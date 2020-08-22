import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit(query);
  };
  return (
    <div>
      <div className="search-bar ui-segment">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
