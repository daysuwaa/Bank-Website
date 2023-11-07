import React from 'react';
import Bank from '../assets/YourBanK.png';
import Shape from '../assets/shape-30.png';
import Location from '../assets/Icon-16.png';
import Call from '../assets/Icon-17.png';
import Mail from '../assets/Icon-18.png';
import Linked from '../assets/Icon-12.png';
import Twitter from '../assets/Icon-13.png';
import { Link } from 'react-router-dom';
import Facebook from '../assets/Icon-3.png';

const Footer = () => {
  return (
    <div>
      <div style={{ display: 'flex', padding: '60px 80px 30px 80px', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
        <div className="flex items-center">
          <img src={Shape} alt='logo' className='w-[34px] h-[34px] shrink-0' />
          <img src={Bank} alt='logo' className='w-[94.91px] h-[15.58px] shrink-0' />
        </div>

        <div>
          <ul className="flex font-medium text-white font-lexend leading-normal space-x-6">
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
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', alignSelf: 'stretch' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', gap: '20px', alignSelf: 'stretch', flexWrap: 'wrap', color: '#E4E4E7' }}>
            <li className='flex'>
              <img src={Mail} alt='mail' className='w-[28px] h-[28px]' />
              <p className='font-lexend'>hello@skillbirdge.com</p>
            </li>

            <li className='flex'>
              <img src={Call} alt='telephone' className='w-[28px] h-[28px]' />
              <p to="/bank/careers" className='font-lexend'>
                +91 91813 23 2309
              </p>
            </li>

            <li className='flex'>
              <img src={Location} alt='location' className='w-[28px] h-[28px]' />
              <p to="/bank/about" className='font-lexend'>
                Somewhere in the World
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ border: '1px solid #262626', borderRadius: '12px', margin: '10px 25px', background: 'var(--grey-10, #1A1A1A)' }}>
        <div className='' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }}>
          <img src={Facebook} alt='gmail' style={{ padding: '14px', borderRadius: '100px', background: 'var(--green-60, #CAFF33)' }} />
          <img src={Linked} alt='facebook' style={{ padding: '14px', borderRadius: '100px', background: 'var(--green-60, #CAFF33)' }} />
          <img src={Twitter} alt='apple' style={{ padding: '14px', borderRadius: '100px', background: 'var(--green-60, #CAFF33)' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--grey-shades-70, #B3B3B3)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '21px', paddingTop: '2rem' }}>
            YourBank All Rights Reserved
          </p>
          <p style={{ color: 'var(--grey-shades-70, #B3B3B3)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '21px', paddingTop: '1rem', paddingBottom: '2rem' }}>
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
