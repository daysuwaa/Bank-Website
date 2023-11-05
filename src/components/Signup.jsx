import React from 'react'
import { Link } from 'react-router-dom';
// import Abstract from'../assets/Abstract Design.png'
// import Omo from'../assets/Icon.png'
// import Gmail from'../assets/Icon-2.png'
// import Facebook from '../assets/Icon-3.png'
// import Apple from '../assets/Icon-4.png'
//  import Eye from '../assets/Icon-5.png'

const Signup = () => {
  
  return (
    <div>
     <div style={{display:'flex', width:'1064px', padding:'80px 200px', flexDirection:'column', alignItems:'flex-start', gap:'60px'}}/>
     <div style={{borderRadius:'16px', backgroundBlendMode:'overlay, normal'}}>
     <h1 style={{color:'#CAFF33', textAlign:'center', fontSize:'38px', fontStyle:'normal', fontWeight:'500', lineHeight:'normal', fontFamily:'lexend'}}>Sign Up</h1>
     <p style={{color: 'var(--grey-75, #BFBFBF)',textAlign: 'center',fontFamily: 'Lexend',fontSize: '16px',fontStyle: 'normal',fontWeight: '300',lineHeight: 'normal' ,paddingTop:'9px'}}>
      Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>

      <div className="flex justify-center items-center h-full">
  <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2" style={{ padding: '20px', gap: '10px', alignItems: 'center' }}>
    <input
      type="text"
      placeholder="Enter First Name"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A', width: '320px', height: '64px', padding: '20px' }}
    />
    <input
      type="text"
      placeholder="Enter Last Name"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A', width: '320px', height: '64px', padding: '20px' }}
    />
    <input
      type="text"
      placeholder="Enter your Email"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A', width: '320px', height: '64px', padding: '20px' }}
    />
    <div>
    <input
      type="text"
      placeholder="Enter your password"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A', width: '320px', height: '64px', padding: '20px' }}
    />
    </div>
  </div>
</div>
{/* sign up and log in buttons */}
<div style={{display:'grid', padding:'14px 24px', alignItems:'center', gap:'10px', alignSelf:'stretch' }}className="justify-center items-center">
  <button style={{borderRadius:'63px', background:'#CAFF33', width:'404px', height:'49px'}}>
    <Link to='/bank/signup' style={{color:'#262626', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}}>
    Sign Up
    </Link>
  </button>
  <button style={{borderRadius:'63px', border: '1px solid var(--grey-20, #333)', background:'#262626', width:'404px', height:'49px', marginTop:'10px'}}>
    <Link to='/bank/login' style={{color:'white', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}}>
    Login
   </Link>
  </button>
</div>



     </div>
    </div>
  )
}

export default Signup