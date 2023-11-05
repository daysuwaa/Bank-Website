import React from 'react';
import Shape from '../assets/shape-30.png';
import Bank from '../assets/YourBanK.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="rounded-full border border-gray-800 bg-grey-800 mt-3">
      <div className="flex items-center justify-between w-screen p-4">
        {/* Images */}
        <div className="flex items-center"> {/* Group the images together */}
          <img className='w-[30px] h-[30px]' src={Shape} alt='logo' />
          <img className='w-[83.75px] h-[13.75px] flex-shrink-0' src={Bank} alt='logo' />
        </div>

        {/* Navs (centered) */}
        <ul className="flex space-x-2 font-medium text-white text-base font-lexend leading-7">
          <li>
            <Link to="/bank/" className='font-lexend'>
              Home
            </Link>
          </li>

          <li>
            <Link to="/bank/" className='font-lexend'>
              Careers
            </Link>
          </li>

          <li>
            <Link to="/bank/" className='font-lexend'>
              About
            </Link>
          </li>

          <li>
            <Link to="/bank/" className='font-lexend'>
              Security
            </Link>
          </li>
        </ul>

        {/* P tags (side by side) */}
        <div className="flex space-x-2">
          <Link to="/bank/signup" className=''>
            Sign Up
          </Link>
          <button>
          <Link to="/bank/signup" className=''>
            Login
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
