import './search-box.styles.css';
import React, { Component } from 'react'

const SearchBox = ({ placeholder, className, onChangeHandler }) =>
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />



export default SearchBox;

