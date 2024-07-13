import React from 'react';
import { useDispatch } from 'react-redux';
import { searchTask } from '../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(searchTask(event.target.value));
    };

    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search tasks..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
