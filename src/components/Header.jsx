import React, { Fragment, useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const navigate = useNavigate();

  return (
    <Fragment>
      <nav
        className={`fixed flex w-full justify-between ${
          colorChange ? 'nav-bg' : ''
        }`}>
        <img
          className='w-2/5 lg:w-1/5 cursor-pointer'
          src={logo}
          alt='Fortnite'
          onClick={() => navigate('/')}
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='mr-10 text-white font-bold lg:hidden'>
          <p className='flex'>
            {!menuOpen ? (
              <FaBars className='mt-1 mr-1' />
            ) : (
              <HiX className='mt-1 mr-1' />
            )}{' '}
            MENU
          </p>
        </button>

        <ul className='hidden lg:flex uppercase text-xs lg:text-sm items-center  text-white font-bold whitespace-nowrap'>
          <li className='pr-6'>Get Fortnite</li>
          <li className='pr-6'>Battle Pass</li>
          <li className='pr-6'>Watch</li>
          <li className='pr-6'>News</li>
          <li className='pr-6'>FAQ</li>
          <li
            className='pr-6 cursor-pointer'
            onClick={() => navigate('/forums')}>
            Forums
          </li>
          <li className='pr-6'>Merch</li>
          <li className='pr-6'>Help</li>
          <li className='pr-6'>Events</li>
        </ul>
      </nav>

      <div
        className={`menu bg-slate-900 h-screen fixed z-10 w-3/5 sm:w-1/2 md:w-2/6 p-10 ${
          menuOpen ? '' : 'hidden'
        }`}>
        <ul className='uppercase text-xs lg:text-sm items-center  text-white font-bold'>
          <li className='pt-6'>Get Fortnite</li>
          <li className='pt-6'>Battle Pass</li>
          <li className='pt-6'>Watch</li>
          <li className='pt-6'>News</li>
          <li className='pt-6'>FAQ</li>
          <li className='pt-6'>Forums</li>
          <li className='pt-6'>Merch</li>
          <li className='pt-6'>Help</li>
          <li className='pt-6'>Events</li>
        </ul>
      </div>
    </Fragment>
  );
}
