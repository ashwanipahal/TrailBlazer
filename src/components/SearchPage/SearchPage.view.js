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
      searchData({seatNumber:value,position:[0,0]});
    } // TODO : set the exact lat long for the seat
    else {
      alert('Enter seat number');
    }
  };

  return (
    <div className='search-page'>
      <div className='search-page__image'>
        <img src="images/teams.png" alt="teams" />
      </div>
      <div className='search-page__text'>
      <div class="search-page__elements">
        <input ref={inputRef} placeholder='Are you looking for any location or contact number or food menu?' />
      </div>
        <button type='submit' onClick={onSubmit}>
          Search
        </button>

        <ul>
            <li>Looking for a seat or conference room? Just, input your seat number or conference room name and we will show you your destination.</li>
            <li>Looking for OS/IT helpline number to solve your problems. Type in the name or search from the list.</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
