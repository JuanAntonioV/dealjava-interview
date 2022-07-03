import { Component } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import iconLocation from '../../assets/icons/location-icon.svg';
import iconSearch from '../../assets/icons/search-icon.svg';

export default class Navbar extends Component {
  render() {
    return (
      <header className='header'>
        <img
          className='logoNav'
          src={logo}
          alt='Logo'
          onClick={() => {
            location.href = '/';
          }}
        />
        <nav className='navBar'>
          <div className='searchBar'>
            <label htmlFor='kota'>
              <img
                className='iconLocation'
                src={iconLocation}
                alt='Location Icon'
              />
            </label>
            <select name='kota' id='kota'>
              <option value='Medan' id='medan'>
                Medan
              </option>
            </select>
            <span className='deviderNav' />
            <input
              className='search'
              type='text'
              placeholder='Cari deal menarik'
            />
            <button className='btnSearch'>
              <img className='iconSearch' src={iconSearch} alt='Search Icon' />
            </button>
          </div>
          <div>
            <a href='/bantuan' className='btnBantuan'>
              Bantuan
            </a>
            <button
              className='btnMasuk'
              onClick={() => {
                location.href = '/login';
              }}
            >
              Masuk
            </button>
          </div>
        </nav>
      </header>
    );
  }
}
