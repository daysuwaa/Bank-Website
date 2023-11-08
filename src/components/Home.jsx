import React from 'react'
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
      <div className='flex pt-[60px] pr-[200px] pb-[60px] pl-[80px] items-center gap-[100px]'>
        <div className='grid grid-cols-2 grid-rows-1'>
        <div style={{display:'flex', flexDirection:'center', alignItems:'flex-start', gap:'16px', alignSelf:'stretch' }}>
          <img src={Check} alt='alt'/>
          <div>
          <p style={{color: 'var(--absolute-white, #FFF)', fontFamily:'lexend', fontSize:'14px', fontStyle:'normal', fontWeight:'300', lineHeight:'24px'}}>No LLC Required, No Credit Check.</p>
          <h1 style={{color: 'var(--absolute-white, #FFF)', fontFamily:'lexend', fontSize:'38px', fontStyle:'normal', fontWeight:'500', lineHeight:'57px'}}>Welcome to YourBank Empowering Your <span style={{color: 'var(--green-60, #CAFF33)',fontFamily:'lexend', fontSize:'38px', fontStyle:'normal', fontWeight:'500', lineHeight:'57px'}}>Financial Journey</span></h1>
          {/* </div> */}
          {/* <div> */}
          <p style={{color: 'var(--white-90, #E4E4E7)', fontFamily:'lexend', fontSize:'14px', fontStyle:'normal', fontWeight:'300', lineHeight:'24px'}}>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
          </div>
        </div>
        </div>
 
      </div>

    </div>
  )
}

export default Home