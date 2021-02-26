import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const SearchPage = (props) => {
  const { searchData, activeSearch } = props;
  const inputRef = useRef();
  let history = useHistory();
  const onSubmit = () => {
    const value = inputRef.current.value;
    if (value) {
      if (value.includes('transport')) {
        history.push('/contacts');
        activeSearch('transport');
      } else if (value.includes('it')) {
        history.push('/contacts');
        activeSearch('it');
      } else {
        history.push('/map');
        searchData({ seatNumber: value, position: [0, 0] });
      }
    } // TODO : set the exact lat long for the seat
    else {
      alert('Enter seat number');
    }
  };

  return (
    <div className='search-page'>
      <h1>Search for Seat</h1>
      <div className='input-field'>
        <input ref={inputRef} placeholder='G-06-201' />
        <button type='submit' onClick={onSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
