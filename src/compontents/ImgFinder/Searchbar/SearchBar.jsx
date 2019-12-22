import React, { Component } from 'react';
import style from './SearchBar.module.css';

class SearchBar extends Component {
  render () {
    return (
      <div className={style.SearchBar}>
        <form className={style.SearchForm}>
          <button type='submit' className={style.SearchFormButton}>
            <span className={style.SearchFormButtonlabel}></span>
          </button>
          <input
            className={style.SearchFormInput}
            type='text'
            autocomplete='off'
            autofocus
            placeholder='Search images and photos'
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
