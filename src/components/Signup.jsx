import React from 'react'
import { Link } from 'react-router-dom';
import Abstract from'../assets/Abstract Design.png'
// import Omo from'../assets/Icon.png'
import Gmail from'../assets/Icon-2.png'
import Facebook from '../assets/Icon-3.png'
import Apple from '../assets/Icon-4.png'
//  import Eye from '../assets/Icon-5.png'

const Signup = () => {
  
  return (
    <div className='px-7 m-0' >
     
    <div className='' style={{backgroundColor:'#1A1A1A', border: '1px solid #262626' ,borderRadius: '50px'}}>
    <img src={Abstract} alt='ab' className='lg:w-[256px] lg:h-[243px]' style={{alignSelf:'stretch', width:'167px', height:'159px', position:'absolute', right:'35px', fill: 'radial-gradient(152.24% 143.75% at 103.26% 0%, rgba(25, 25, 25, 0.30) 20.29%, rgba(202, 255, 51, 0.30) 34.91%, rgba(25, 25, 25, 0.30) 60.69%)' }}/>
     <div style={{display:'flex', padding:'80px 200px', flexDirection:'column', alignItems:'flex-start', gap:'60px'}}/>
     <div style={{borderRadius:'16px', backgroundBlendMode:'overlay, normal'}}>
     <h1 style={{color:'#CAFF33', textAlign:'center', fontStyle:'normal', fontWeight:'500', lineHeight:'normal', fontFamily:'lexend'}} className='text-3xl lg:text-4xl'>Sign Up</h1>
     <p style={{color: 'var(--grey-75, #BFBFBF)',textAlign: 'center',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '300',lineHeight: 'normal' ,paddingTop:'9px'}} className='text-md lg:text-lg px-12'>
      Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>

      <div className="flex justify-center items-center h-full">
  <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2" style={{ padding: '20px', gap: '10px', alignItems: 'center' }}>
    <input
      type="text"
      placeholder="Enter First Name"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[320px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <input
      type="text"
      placeholder="Enter Last Name"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[320px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <input
      type="text"
      placeholder="Enter your Email"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[320px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <div>
    <input
      type="text"
      placeholder="Enter your password"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[320px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    </div>
  </div>
</div>
{/* sign up and log in buttons */}
<div style={{display:'grid', padding:'14px 24px', alignItems:'center', gap:'10px', alignSelf:'stretch' }}className="justify-center items-center ">
  <button style={{borderRadius:'63px', background:'#CAFF33'}} className=' w-[390px] h-[49px] lg:w-[404px] lg:h-[49px]'>
    <Link to='/bank/signup' style={{color:'#262626', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} >
    Sign Up
    </Link>
    
  </button>
  <button style={{borderRadius:'63px', border: '1px solid var(--grey-20, #333)', background:'#262626', marginTop:'10px'}} className=' w-[390px] h-[49px] lg:w-[404px] lg:h-[49px]'>
    <Link to='/bank/login' style={{color:'white', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}}>
    Login
   </Link>
  </button>
</div>

  <div className="flex items-center ml-[2rem] lg:ml-[31rem]">
      <div style={{width:'110px', height:'1px', background: '#B3B3B3'}}></div>
      <div className="mx-2 text-white">Or continue with</div>
      <div style={{width:'129px', height:'1px', background: '#B3B3B3'}}></div>
    </div>

    {/* icons */}
    <div className='flex justify-center items-center gap-[20px] p-[24px]'>
      <img src={Gmail} alt='gmail' style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>
      <img src={Facebook} alt='facebook'style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>
      <img src={Apple} alt='apple' style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>

    </div>



     </div>
    </div>
    </div>
  )
}

export default Signup