import React from 'react';
import PropTypes from 'prop-types';
import {
  Searchform,
  Searchbtn,
  Searchlabel,
  Searchinput,
  Searchbarh,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const handleSearch = event => {
    event.preventDefault();
    onSearch(event.target.elements.imageName.value);
  };

  return (
    <Searchbarh>
      <Searchform onSubmit={handleSearch}>
        <Searchbtn type="submit">
          <Searchlabel>Search</Searchlabel>
        </Searchbtn>

        <Searchinput
          type="text"
          name="imageName"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Searchform>
    </Searchbarh>
  );
};
Searchbar.propTypes = {
  onSearch: PropTypes.func,
};
