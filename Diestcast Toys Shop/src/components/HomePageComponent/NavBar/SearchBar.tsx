import React from 'react';

const SearchBar: React.FC = () => (
    <div className="d-flex flex-grow-1 mx-3">
        <input
            type="text"
            id="search-bar"
            className="form-control me-2"
            placeholder="Search for your items..."
        />
    </div>
);

export default SearchBar;
