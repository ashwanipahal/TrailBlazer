import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const SearchPage = () => {
  const inputRef = useRef();
  let history = useHistory();
  const onSubmit = () => {
    const value = inputRef.current.value;
    if (value) {
      if (/transport/i.test(value) || /it/i.test(value) || /office/i.test(value)) {
        if (/transport/i.test(value)) {
          history.push({pathname: '/contacts',search: '?query=transport'});
        }
        if (/it/i.test(value)) {
          history.push({pathname: '/contacts',search: '?query=it-support'});
        }
        if (/office/i.test(value)) {
          history.push({pathname: '/contacts',search: '?query=office-service'});
        }
        
      } else {
        history.push({pathname: '/map',search: `?location=${value}`});
      }
    } // TODO : set the exact lat long for the seat
    else {
      alert('Enter seat number');
    }
  };

  return (
    <div className='row no-gutters'>
      <div className='search-page'>
        <div className='row'>
          <div className='search-page__image col-lg-6 col-md-6 col-sm-12'>
            <img src='images/teams.png' alt='teams' />
          </div>
          <div className='search-page__text col-lg-6 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='search-page__elements col-lg-8 col-md-12'>
                <input
                  className='input-field'
                  ref={inputRef}
                  placeholder='Are you looking for any location or contact number?'
                />
              </div>
              <button type='submit' onClick={onSubmit} className='col-lg-3 col-md-12'>
                Search
              </button>
            </div>
            <ul>
              <li>
                Looking for a seat or conference room? Just, input your seat number or conference room name and we will
                show you your destination.
              </li>
              <li>
                Looking for OS/IT helpline number to solve your problems. Type in the name or search from the list.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
