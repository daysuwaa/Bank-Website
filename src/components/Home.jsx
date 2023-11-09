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
      <div className=' flex items-center lg:pt-[60px] lg:pr-[200px] lg:pb-[60px] lg:pl-[80px]' style={{}}>
      <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1  p-[3rem] ">
        <div>
        <div className='flex'>
        <img src={Check} alt='check' className='w-[20px] h-[20px]' />
        <p style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px'}} className='font-bold'>
        No LLC Required, No Credit Check.
        </p>
        </div>
      <div>
        <p style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'Lexend', fontSize: '38px', fontStyle: 'normal', fontWeight: '500', lineHeight: '57px' }} className='font-extrabold'>
            Welcome to YourBank Empowering Your <span style={{ color: 'var(--green-60, #CAFF33)' }}>Financial Journey</span>
          </p>
        </div>
        <div>
        <p style={{color: 'var(--absolute-white, #FFF)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px'}} className='font-bold text-center lg:text-left'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
          </p>
        </div>
        <div style={{display:'flex', padding:'50px 24px' , alignItems:'center', gap:'10px'}}>
          <button style={{borderRadius: '82px', background:'var(--green-60, #CAFF33' }}className='w-[144px] h-[49px]'>
           Open Account
          </button>
        </div>
        </div>
       

        

        <div className="p-3 flex justify-end s">
          <img src={Container} alt='img' className='w-[305.45]  h-[368.19px} lg:w-[410.192px] lg:h-[501.274px]  w-full' />
        </div>
      </div>
      
     {/* <img src={Vector} alt='abs' /> */}
     </div>
    </div>
  )
}

export default Home