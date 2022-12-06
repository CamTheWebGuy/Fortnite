import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <div className='absolute flex w-full justify-between'>
      <img className='w-2/5 lg:w-1/5' src={logo} alt='Fortnite' />
      <button className='mr-10 text-white font-bold lg:hidden'>MENU</button>
      <ul className='hidden lg:flex uppercase text-xs lg:text-sm items-center  text-white font-bold whitespace-nowrap'>
        <li className='pr-6'>Get Fortnite</li>
        <li className='pr-6'>Battle Pass</li>
        <li className='pr-6'>Watch</li>
        <li className='pr-6'>News</li>
        <li className='pr-6'>FAQ</li>
        <li className='pr-6'>Forums</li>
        <li className='pr-6'>Merch</li>
        <li className='pr-6'>Help</li>
        <li className='pr-6'>Events</li>
      </ul>
    </div>
  );
}
