import React from 'react'
import Container from '../assets/Container.png'
// import Shape from '../assets/shape-30.png';
// import Bank from '../assets/YourBanK.png';
// import Abstract from'../assets/Abstract Design.png'
import Check from '../assets/Icon-19.png';
// import Down from'../assets/Icon-20.png'
// import Cards from '../assets/Icon-21.png'
// import Arrow from '../assets/Icon-22.png'
// import Quotes from'../assets/Icon-23.png'
// import House from '../assets/Icon-25.png'
// import ArrowUp from '../assets/Icon-26.png'
// import ArrowDown from'../assets/Icon-27.png'
// import Briefcase from '../assets/briefcase.fill.png'
// import Frame from '../assets/Frame.png'
// import Frame2 from '../assets/Frame-2.png'
// import Vector from '../assets/Vector-2.png'
// import Vector3 from '../assets/Vector-2.png'



const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div className=' flex items-center gap-[100px]' style={{padding:'60px 200px 60px 80px', width:'1440px'}}>
      <div style={{display: 'flex',flexDirection: 'column',alignItems: 'flex-start',gap: '16px',alignSelf: 'stretch'}}>
        <div className='flex '>
        <img src={Check} alt='check'/>
        <p className='pl-2'>No LLC Required, No Credit Check.</p>
        </div>
      </div>
      </div>

     
    </div>
  )
}

export default Home