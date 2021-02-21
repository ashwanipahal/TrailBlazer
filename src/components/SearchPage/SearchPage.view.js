import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const SearchPage = (props) => {
  const { searchData } = props;
  const inputRef = useRef();
  let history = useHistory();
  const onSubmit = () => {
    history.push('/map');
    const value = inputRef.current.value;
    if (value) searchData([0, 0]); // TODO : set the exact lat long for the sheet
  };

  return (
    <div className='search-page'>
      <h1>Search for Seat</h1>
      <div className='input-field'>
        <input ref={inputRef} placeholder='G-06-201' />
        <button type='submit' onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
