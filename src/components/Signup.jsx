import React from 'react'
import { Link } from 'react-router-dom';
import Abstract from'../assets/Abstract Design.png'
import Apos from'../assets/Icon-14.png'
import Gmail from'../assets/Icon-2.png'
import Facebook from '../assets/Icon-3.png'
import Apple from '../assets/Icon-4.png'
import Bank from '../assets/YourBanK.png'
import Shape from '../assets/shape-30.png';
import Location from'../assets/Icon-16.png'
import Call from'../assets/Icon-17.png'
import Mail from '../assets/Icon-18.png'


const Signup = () => {
  
  return (
    <div className='px-7 m-0' >
    <div className='' style={{backgroundColor:'#1A1A1A', border: '1px solid #262626' ,borderRadius: '50px'}}>
    <img src={Abstract} alt='ab' className='lg:w-[256px] lg:h-[243px]' style={{alignSelf:'stretch', width:'167px', height:'159px', position:'absolute', right:'35px', fill: 'radial-gradient(152.24% 143.75% at 103.26% 0%, rgba(25, 25, 25, 0.30) 20.29%, rgba(202, 255, 51, 0.30) 34.91%, rgba(25, 25, 25, 0.30) 60.69%)' }}/>
     <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'60px'}} className='px-[170px] py-[50px] lg:px-[220px] lg:py-[80px]'/>
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
      className='w-[290px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <input
      type="text"
      placeholder="Enter Last Name"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[290px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <input
      type="text"
      placeholder="Enter your Email"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[290px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    <div>
    <input
      type="text"
      placeholder="Enter your password"
      style={{ color: '#59595A', fontFamily: 'lexend', fontSize: '16px', fontStyle: 'normal', fontWeight: '300', lineHeight: '150%', borderRadius: '88px', border: '1px solid #262626', background: '#1A1A1A',  padding: '20px' }}
      className='w-[290px] h-[58px] lg:w-[400px] lg:h-[64px]'
    />
    </div>
  </div>
</div>

{/* sign up and log in buttons */}
<div style={{display:'grid', padding:'14px 24px', alignItems:'center', gap:'10px', alignSelf:'stretch' }}className="justify-center items-center ">
  <button style={{borderRadius:'63px', background:'#CAFF33'}} className=' w-[300px] h-[49px] lg:w-[404px] lg:h-[49px]'>
    <Link to='/bank/signup' style={{color:'#262626', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} >
    Sign Up
    </Link>
    
  </button>
  <button style={{borderRadius:'63px', border: '1px solid var(--grey-20, #333)', background:'#262626', marginTop:'10px'}} className=' w-[300px] h-[49px] lg:w-[404px] lg:h-[49px]'>
    <Link to='/bank/login' style={{color:'white', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}}>
    Login
   </Link>
  </button>
</div>

  <div className="flex items-center justify-center  ">
      <div style={{ height:'1px', background: '#B3B3B3', width:'80px'}} ></div>
      <div className=" text-white"> Or continue with </div>
      <div style={{height:'1px', background: '#B3B3B3', width:'80px'}} ></div>
    </div>

    {/* icons */}
    <div className='flex justify-center items-center gap-[20px] p-[24px] '>
      <img src={Gmail} alt='gmail' style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>
      <img src={Facebook} alt='facebook'style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>
      <img src={Apple} alt='apple' style={{display:'flex', padding:'14px', borderRadius:'50px', border:'1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%'}}/>
    </div>


     </div>
     
    </div>
    {/* testimonalsss */}
    {/* small screen */}
   <div className='py-[5rem]'>
    <h1 style={{color:' #FFF',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '500',lineHeight: '57px,', textAlign:'center', fontSize:'28px'}} className=' lg:hidden'>
    Our 
   <span style={{color: 'var(--green-60, #CAFF33)',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '500',lineHeight: '58px'}}> Testimonials </span> </h1>
   <div>
   <p style={{color: 'var(--grey-70, #B3B3B3)',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '300',fontSize:'14px'}} className=' text-center lg:hidden'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit nihil nulla iure ea quam sapiente ipsa laboriosam? Quis eaque consequuntur expedita odio aliquam est corrupti. Omnis saepe dolore eos.
  </p>
  </div>


<div className='p-5 lg:hidden'>
  <div style={{display:'flex', padding:'12px', alignItems:'flex-start', borderRadius: '82px',border: '1px solid var(--grey-15, #262626)' }}className="justify-center items-center lg:hidden">
  <button style={{borderRadius:'140px', padding:'10px 18px', background:'#CAFF33', justifyContent:'center', alignItems:'center', gap:'10px'}} className=' w-[139px] h-[41px] lg:w-[404px] lg:h-[49px] lg:hidden'>
    <Link to='/bank/signup' style={{color:'#262626', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} className="">
    For Individuals
    </Link>
    
  </button>
  <button style={{borderRadius:'140px', padding:'10px 18px', justifyContent:'center', alignItems:'center', gap:'10px' , border: '1px solid var(--grey-15, #262626)'}} className='w-[139px] h-[41px] lg:w-[404px] lg:h-[49px lg:hidden'>
    <Link to='/bank/login' style={{color:'white', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} className="">
    For Business
   </Link>
  </button>
</div>
</div>
{/* end of ss */}

{/* large screens */}
<div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}className='hidden lg:block'>
    <h1 style={{color:' #FFF',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '500',lineHeight: '57px,', fontSize:'38px'}} className='hidden lg:block'>
    Our 
   <span style={{color: 'var(--green-60, #CAFF33)',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '500',lineHeight: '58px'}}> Testimonials </span> </h1>

   <div className=' flex'>
   <p style={{color: 'var(--grey-70, #B3B3B3)',fontFamily: 'Lexend',fontStyle: 'normal',fontWeight: '300', fontSize:'14px' }} className='hidden lg:block  '>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit nihil nulla iure ea quam sapiente ipsa laboriosam? Quis eaque consequuntur expedita odio aliquam est corrupti. Omnis saepe dolore eos.
  </p>
  <div style={{display:'flex', padding:'12px', alignItems:'flex-start', borderRadius: '82px',border: '1px solid var(--grey-15, #262626)' }}className="justify-center items-center ">
  <button style={{borderRadius:'140px', padding:'10px 18px', background:'#CAFF33', justifyContent:'center', alignItems:'center', gap:'10px'}} className=' w-[136px] h-[41px]  '>
    <Link to='/bank/signup' style={{color:'#262626', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} className="">
    For Individuals
    </Link>
  </button>
  <button style={{borderRadius:'140px', padding:'10px 18px', justifyContent:'center', alignItems:'center', gap:'10px' , border: '1px solid var(--grey-15, #262626)'}} className='w-[136px] h-[41px]'>
    <Link to='/bank/login' style={{color:'white', textAlign:'center', fontFamily:'lexend', fontSize:'14px', fontWeight:'400', lineHeight:'150%'}} className="">
    For Business
   </Link>
  </button>
</div>
</div>


</div>
{/* end of ls */}




<div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-1" style={{ }}>

  <div style={{display: 'flex',padding: '20px',flexDirection: 'column',alignItems: 'center',gap: '30px',alignSelf: 'stretch'}}>
<img src={Apos} alt='app' className='justify-center items-center w-[44px] h-[44px] flex gap-[16px]' style={{}}/>
<p style={{background: 'linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)', color:'var(--absolute-white, #FFF)', textAlign:'center', fontFamily:'Lexend', fontSize:'14px', fontStyle:'normal'}}>
I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.
</p>
<p style={{color: 'var(--green-60, #CAFF33)',textAlign: 'center',fontFamily: 'Lexend',fontSize: '16px',fontStyle: 'normal',fontWeight: '500',lineHeight: '24px'}}>Sara T</p>
</div>

<div style={{display: 'flex',padding: '20px',flexDirection: 'column',alignItems: 'center',gap: '30px',alignSelf: 'stretch'}}>
<img src={Apos} alt='app' />
<p style={{background: 'linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)', color:'var(--absolute-white, #FFF)', textAlign:'center', fontFamily:'Lexend', fontSize:'14px', fontStyle:'normal'}}>
 Your Bank has been my trusted finanace partner for years. Their personal service and innovative digital bank solutions have made managing my finances a breeze and ood good stuff too. Great xys and okay niec okay soft.
  </p>
  <p style={{color: 'var(--green-60, #CAFF33)',textAlign: 'center',fontFamily: 'Lexend',fontSize: '16px',fontStyle: 'normal',fontWeight: '500',lineHeight: '24px'}}>John D</p>
  </div>

  <div style={{display: 'flex',padding: '20px',flexDirection: 'column',alignItems: 'center',gap: '30px',alignSelf: 'stretch'}}>
<img src={Apos} alt='app'/>
<p style={{background: 'linear-gradient(270deg, rgba(25, 25, 25, 0.00) 0%, #191919 105.84%)', color:'var(--absolute-white, #FFF)', textAlign:'center', fontFamily:'Lexend', fontSize:'14px', fontStyle:'normal'}}>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aperiam odio ipsa, quis laudantium laborum, optio, reprehenderit facere eum similique at accusantium voluptas voluptate? Quos animi tenetur sunt totam mollitia.
  </p>
  <p style={{color: 'var(--green-60, #CAFF33)',textAlign: 'center',fontFamily: 'Lexend',fontSize: '16px',fontStyle: 'normal',fontWeight: '500',lineHeight: '24px'}}>Emily G</p>
  </div>
</div>

{/* footer section */}
<div style={{display: 'flex',padding: '60px 80px 30px 80px',flexDirection: 'column',alignItems: 'center', gap: '40px'}}>
<div className="flex items-center "> 
<img src={Shape} alt='logo' className='w-[34px] h-[34px] shrink-0'/>
<img src={Bank} alt='logo' className='w-[94.91px] h-[15.58px] shrink-0'/>
</div>

<div>
<ul className=" flex font-medium text-white  font-lexend leading-normal space-x-6 ">
          <li>
            <Link to="/bank/" className='font-lexend'>
              Home
            </Link>
          </li>

          <li>
            <Link to="/bank/careers" className='font-lexend'>
              Careers
            </Link>
          </li>

          <li>
            <Link to="/bank/about" className='font-lexend'>
              About
            </Link>
          </li>

          <li>
            <Link to="/bank/security" className='font-lexend'>
              Security
            </Link>
          </li>
        </ul>
</div>
<hr className='border-t-2 border-gray-400 my-4'></hr>
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



  </div>
  </div>
  )
  
}

export default Signup