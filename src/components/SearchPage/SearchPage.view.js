import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const SearchPage = (props) => {
  const { searchData } = props;
  const inputRef = useRef();
  let history = useHistory();
  const onSubmit = () => {
    const value = inputRef.current.value;
    if (value) {
      history.push('/map');
      searchData([0, 0]);
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
