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
      if (/transport/i.test(value) || /it/i.test(value) || /office/i.test(value)) {
        if (/transport/i.test(value)) {
          activeSearch('transport');
        }
        if (/it/i.test(value)) {
          activeSearch('it-support');
        }
        if (/office/i.test(value)) {
          activeSearch('office-service');
        }
        history.push('/contacts');
      } else {
        history.push('/map');
        searchData(value);
      }
    } // TODO : set the exact lat long for the seat
    else {
      alert('Enter seat number');
    }
  };

  return (
    <div className='search-page'>
      <div className='search-page__image'>
        <img src='images/teams.png' alt='teams' />
      </div>
      <div className='search-page__text'>
        <div className='search-page__elements'>
          <input ref={inputRef} placeholder='Are you looking for any location or contact number or food menu?' />
        </div>
        <button type='submit' onClick={onSubmit}>
          Search
        </button>

        <ul>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
