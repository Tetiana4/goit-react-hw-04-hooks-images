import React from 'react';
import {
  Searchform,
  Searchbtn,
  Searchlabel,
  Searchinput,
  Searchbarh,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.imageName.value);
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
