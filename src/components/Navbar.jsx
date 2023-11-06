import React, { useState} from 'react';
import Shape from '../assets/shape-30.png';
import Bank from '../assets/YourBanK.png';
import Menu from '../assets/Icon.png'
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='lg:px-[2rem] px-[1.7rem] py-[1rem] lg:py-[1.1rem]'>
    <div className="rounded-full border border-gray-800 bg-grey-800 mt-3">
      <div style={{display: 'flex',padding: '14px 24px',justifyContent: 'space-between',alignItems: 'center'}}>
        {/* Images */}
        <div className="flex items-center "> 
          <img className='w-[26px] h-[26px]  lg:w-[30px]  lg:h-[30px]' src={Shape} alt='logo' />
          <img className='w-[72.583px] h-[11.91px] lg:w-[83.75px] lg:h-[13.75px] flex-shrink-0' src={Bank} alt='logo' />
        </div>

        {/* Navs (centered) */}
        <ul className="hidden md:flex lg:flex font-medium text-white text-base font-lexend leading-normal space-x-6 ">
          <li>
            <Link to="/bank/" className='font-lexend hover:underline'>
              Home
            </Link>
          </li>

          <li>
            <Link to="/bank/careers" className='font-lexend hover:underline'>
              Careers
            </Link>
          </li>

          <li>
            <Link to="/bank/about" className='font-lexend hover:underline'>
              About
            </Link>
          </li>

          <li>
            <Link to="/bank/security" className='font-lexend hover:underline'>
              Security
            </Link>
          </li>
        </ul>

        {/* the log in and sign up */}
        <div className="hidden md:flex lg:flex  space-x-7">
          <Link to="/bank/signup" className='text-white font-lexend text-md leading-7 hover:underline'>
            Sign Up
          </Link>
          <button>
          <Link to="/bank/login" style={{ background: 'var(--green-60, #CAFF33)'}} className='rounded-full py-[12px] px-[24px] space-x-2.5 gap-2.5 items-center hover:underline'>
            Login
          </Link>
          </button>
        </div>


        <div onClick={handleNav} className='block md:hidden'>
        {nav ? 
        <CgClose size={30} className="text-white"  /> 
        :<img src={Menu} alt="menu" style={{borderRadius: '82px', display: 'flex', padding: '6px 14px', gap:'10px', alignItems: 'center',  background: 'var(--green-60, #CAFF33)'}} />
}
        </div>
      </div>
      {/* small screenss */}
      <div className={nav ? 'fixed left-0 top-[5.5rem] w-[60%] h-full border-r border-r-gray-900 bg-neutral-900 ease-in-out duration-500' : 'fixed left-[-100%] '}>
      <ul style={{lineHeight:'50px'}}className="grid font-medium text-white text-base font-lexend leading-normal space-x-6 mt-6 ">
          <li>
            <Link to="/bank/" className='font-lexend px-6 hover:underline'>
              Home
            </Link>
          </li>

          <li>
            <Link to="/bank/careers" className='font-lexend hover:underline'>
              Careers
            </Link>
          </li>

          <li>
            <Link to="/bank/about" className='font-lexend hover:underline'>
              About
            </Link>
          </li>

          <li>
            <Link to="/bank/security" className='font-lexend hover:underline'>
              Security
            </Link>
          </li>
          <li>
            <Link to="/bank/signup" className='font-lexend hover:underline' style={{color:'#CAFF33'}}>
             Sign Up
            </Link>
          </li>
          <li>
            <Link to="/bank/login" className='font-lexend hover:underline'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>

  );
};

export default Navbar;
