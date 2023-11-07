import React from 'react'
import Bank from '../assets/YourBanK.png'
import Shape from '../assets/shape-30.png';
import Location from'../assets/Icon-16.png'
import Call from'../assets/Icon-17.png'
import Mail from '../assets/Icon-18.png'
import Linked from'../assets/Icon-12.png'
import Twitter from '../assets/Icon-13.png'
import { Link } from 'react-router-dom';
import Facebook from '../assets/Icon-3.png'
const Footer = () => {
  return (
    <div>
        <div style={{display: 'flex',padding: '60px 80px 30px 80px',flexDirection: 'column',alignItems: 'center', gap: '40px'}}>
<div className="flex items-center "> 
<img src={Shape} alt='logo' className='w-[34px] h-[34px] shrink-0'/>
<img src={Bank} alt='logo' className='w-[94.91px] h-[15.58px] shrink-0'/>
</div>

<div>
<ul className=" flex font-medium text-white  font-lexend leading-normal space-x-6 ">
          <li>
            <Link to="/bank/" className='font-lexend hover:underline '>
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
<div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',gap: '20px',alignSelf: 'stretch'}}className=''>
<ul style={{display: 'flex',justifyContent: 'center',alignItems: 'center',alignContent: 'center',gap: '20px',alignSelf: 'stretch',flexWrap: 'wrap', color:'#E4E4E7'}}>
          <li className='flex'>
            <img src={Mail} alt='mail' className='w-[28px] h-[28px]' /> 
            <p className='font-lexend'>hello@skillbirdge.com</p>
          </li>

          <li className='flex'>
          <img src={Call} alt='telephone' className='w-[28px] h-[28px]'/>
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

<div className='ml-auto mr-auto ' style={{display: 'flex',flexDirection: 'row',alignItems: 'center',gap: '-24px',alignSelf: 'stretch', justifyItems:'center' }}>
  <div style={{display: 'flex',alignItems: 'flex-start',gap:' 8px'}} className="justify-center items-center"></div>
  <img src={Facebook} alt='gmail' style={{display:'flex', padding:'14px',  borderRadius: '100px',background: 'var(--green-60, #CAFF33)'}}/>
  <img src={Linked} alt='facebook'style={{display:'flex', padding:'14px',borderRadius: '100px',background: 'var(--green-60, #CAFF33)'}}/>
  <img src={Twitter} alt='apple' style={{display:'flex', padding:'14px', borderRadius: '100px',background: 'var(--green-60, #CAFF33)'}}/>
</div>

    </div>
  )
}

export default Footer