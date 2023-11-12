import React from 'react'
import Container from '../assets/Container.png'
// import Shape from '../assets/shape-30.png';
// import Bank from '../assets/YourBanK.png';
import Abstract from'../assets/Abstract Design.png'
import Check from '../assets/Icon-19.png';
import Down from'../assets/Icon-20.png'
import Cards from '../assets/Icon-21.png'
import Cash from '../assets/Icon-28.png'
// import Arrow from '../assets/Icon-22.png'
// import Quotes from'../assets/Icon-23.png'
import House from '../assets/Icon-25.png'
// import ArrowUp from '../assets/Icon-26.png'
// import ArrowDown from'../assets/Icon-27.png'
import Briefcase from '../assets/briefcase.fill.png'
import Frame from '../assets/Frame.png'
import Frame2 from '../assets/Frame-2.png'
// import Vector from '../assets/Vector-2.png'
// import Vector3 from '../assets/Vector-2.png'



const Home = () => {
  return (
    <div className=''>
      {/* hero section */}
      <div className='flex items-center lg:pt-[60px] lg:pr-[200px] lg:pb-[60px] lg:pl-[80px]' style={{ padding: '3rem' }}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1">
          <div>
            <div className='flex'>
              <img src={Check} alt='check' className='w-[20px] h-[20px]' />
              <p style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px' }} className='font-bold'>
                No LLC Required, No Credit Check.
              </p>
            </div>
            <div className='text-center lg:text-left'>
              <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '38px', fontStyle: 'normal', fontWeight: '500', lineHeight: '57px' }} className='font-extrabold'>
                Welcome to YourBank Empowering Your <span style={{ color: 'var(--green-60, #CAFF33)' }}>Financial Journey</span>
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'Lexend', fontSize: '14px', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px' }} className='font-bold text-center lg:text-left'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
              </p>
            </div>
            <div style={{ display: 'flex', padding: '50px 24px', alignItems: 'center', gap: '10px' }} className='justify-center lg:justify-start'>
              <button style={{ borderRadius: '82px', background: 'var(--green-60, #CAFF33)' }} className='w-[144px] h-[49px] '>
                Open Account
              </button>
            </div>
          </div>
          <div className="p-3 flex justify-end s">
            <img src={Container} alt='img' className='w-[305.45] h-[368.19px} lg:w-[410.192px] lg:h-[501.274px] w-full' />
          </div>
        </div>
      </div>

      {/* our products */}
      {/* second section */}
      <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '38px', fontStyle: 'normal', fontWeight: '500', textAlign: 'center' }} className='font-semibold block lg:hidden'>
        Our <span style={{ color: 'var(--green-60, #CAFF33)' }} className='font-semibold '>Products</span>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '3rem' }} className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 sm:grid-cols-1'>
        <div>
          <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'Lexend', fontStyle: 'normal', fontWeight: '300', fontSize: '14px', }} className=' text-center lg:hidden'>
            Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your <br></br>unique financial needs and aspirations
          </p>
        </div>
        <div className=' lg:hidden'>
          <div style={{ display: 'flex', padding: '12px', alignItems: 'flex-start', borderRadius: '82px', border: '1px solid var(--grey-15, #262626)' }} className="justify-center items-center lg:hidden">
            <button style={{ borderRadius: '140px', padding: '10px 18px', background: '#CAFF33', justifyContent: 'center', alignItems: 'center', gap: '10px' }} className=' w-[139px] h-[41px] lg:w-[404px] lg:h-[49px] lg:hidden'>
              <div to='/bank/signup' style={{ color: '#262626', textAlign: 'center', fontFamily: 'lexend', fontSize: '14px', fontWeight: '400', lineHeight: '150%' }} className="">
                For Individuals
              </div>
            </button>
            <button style={{ borderRadius: '140px', padding: '10px 18px', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid var(--grey-15, #262626)' }} className='w-[139px] h-[41px] lg:w-[404px] lg:h-[49px lg:hidden]'>
              <div to='/bank/login' style={{ color: 'white', textAlign: 'center', fontFamily: 'lexend', fontSize: '14px', fontWeight: '400', lineHeight: '150%' }} className="">
                For Business
              </div>
            </button>
          </div>
        </div>

        {/* end of ss */}

        {/* large screens */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className='hidden lg:block'>
          <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '38px', fontStyle: 'normal', fontWeight: '500' }} className='font-semibold hidden lg:block'>
            Our <span style={{ color: 'var(--green-60, #CAFF33)' }} className='font-semibold '>Products</span>
          </p>
          <div className='hidden lg:block'>
            <div className=' flex  '>
              <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'Lexend', fontStyle: 'normal', fontWeight: '300', fontSize: '16px' }} className='  '>
                Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations
              </p>
              <div style={{ display: 'flex', padding: '12px', alignItems: 'flex-start', borderRadius: '82px', border: '1px solid var(--grey-15, #262626)' }} className="justify-center items-center  ">
                <button style={{ borderRadius: '140px', padding: '10px 18px', background: '#CAFF33', justifyContent: 'center', alignItems: 'center', gap: '10px' }} className=' w-[136px] h-[41px]  '>
                  <div style={{ color: '#262626', textAlign: 'center', fontFamily: 'lexend', fontSize: '14px', fontWeight: '400', lineHeight: '150%' }} className="">
                    For Individuals
                  </div>
                </button>
                <button style={{ borderRadius: '140px', padding: '10px 18px', justifyContent: 'center', alignItems: 'center', gap: '10px', border: '1px solid var(--grey-15, #262626)' }} className='w-[136px] h-[41px] '>
                  <div style={{ color: 'white', textAlign: 'center', fontFamily: 'lexend', fontSize: '14px', fontWeight: '400', lineHeight: '150%' }} className="">
                    For Business
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of ls */}

        <div className=' mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className=' flex flex-col p-4 my-4 '>
            <img src={Briefcase} alt='brief' className='w-[26px] h-[22px] mx-auto' />
            <h3 style={{ color: 'var(--absolute-white, #FFF)', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px' }} className='mx-auto pt-5 font-bold text-md lg:text-lg'>
              Checking Accounts
            </h3>
            <p style={{ color: 'var(--grey-70,#B3B3B3)', textAlign: 'center', padding: '5px' }}>
              Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
            </p>
          </div>

          <div className=' flex flex-col p-4 my-4 '>
            <img src={Down} alt='brief' className='w-[26px] h-[22px] mx-auto' />
            <h3 style={{ color: 'var(--absolute-white, #FFF)', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px' }} className='mx-auto pt-5 font-bold text-md lg:text-lg'>
              Savings Account
            </h3>
            <p style={{ color: 'var(--grey-70,#B3B3B3)', textAlign: 'center', padding: '5px' }}>
              Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
            </p>
          </div>

          <div className=' flex flex-col p-4 my-4 '>
            <img src={Cards} alt='brief' className='w-[26px] h-[22px] mx-auto' />
            <h3 style={{ color: 'var(--absolute-white, #FFF)', fontStyle: 'normal', fontWeight: '300', lineHeight: '24px', paddingLeft: '8px' }} className='mx-auto pt-5 font-bold text-md lg:text-lg'>
              Loans and Mortgages
            </h3>
            <p style={{ color: 'var(--grey-70,#B3B3B3)', textAlign: 'center', padding: '5px' }}>
              Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
            </p>
          </div>
        </div>

        {/* Use case ss*/}
         <div style={{ textAlign: 'center' }}className='block lg:hidden md:hidden'>
          <p style={{ color: 'var(--green-60, #CAFF33)', fontSize: '28px', fontFamily: 'lexend' }} className='font-semibold '>Use case</p>
          <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', paddingBottom: '3rem' }}>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
      
          <div style={{ border: '1px solid #262626', borderRadius: '12px', width:'358px', height:'370px', margin:'auto', position: 'relative'}}>
  <img src={Abstract} alt='abs' style={{ width: '118px', height: '112px', transform: 'rotate(-90deg)', position: 'absolute' }} />
  <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', padding: '1rem', justifyContent: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', gap:'14px', paddingTop:'2.5rem' }}>
   
    <div className=' w-[154px] h-[160px]'>
      <div style={{ display: 'flex', padding: '20px 14px', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--grey-10, #1A1A1A)', borderRadius: '12px', flex: '1 0 0', border: '1px solid #262626' }}>
        <div style={{ borderRadius: '12px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-19, 1A1A1A)' }}>
          <img src={Frame} alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)', padding: '12px' }} />
        </div>
        <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '14px', fontStyle: 'normal', fontWeight: '500' }}>Managing Personal Finances</p>
      </div>
    </div>




                <div className=' w-[154px] h-[160px] '>
                <div style={{ display: 'flex',padding: '20px 14px',flexDirection: 'column',alignItems: 'center',gap: '14px',background: 'var(--grey-10, #1A1A1A)',borderRadius: '12px',flex: '1 0 0',border: '1px solid #262626'}}>
                 <div style={{ borderRadius: '12px',border: '1px solid var(--grey-15, #262626)',background: 'var(--grey-19, #1A1A1A)'}}>
                  <img src={Frame2}alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)',padding: '12px' }}/>
               </div> 
               <p style={{color: 'var(--absolute-white, #FFF)',fontSize: '14px', fontStyle: 'normal',fontWeight: '500'  }}>Saving for the <br />Future</p></div>
            </div>
               <div className='  w-[154px] h-[160px]'>
              <div style={{display: 'flex',padding: '20px 14px',flexDirection: 'column',alignItems: 'center',gap: '14px',background: 'var(--grey-10, #1A1A1A)',borderRadius: '12px',flex: '1 0 0',border: '1px solid #262626'}}>
                <div style={{borderRadius: '12px',border: '1px solid var(--grey-15, #262626)',background: 'var(--grey-19, #1A1A1A)'}}>
                  <img src={House}alt='frame'style={{borderRadius: '50px',border: '1px solid #CAFF33',background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)',padding: '12px' }}/>
              </div>
              <p style={{color: 'var(--absolute-white, #FFF)',fontSize: '14px',fontStyle: 'normal',fontWeight: '500'}}>House Ownership</p>
            </div> 
            </div>
            <div className=' w-[154px] h-[160px]'>
            <div style={{display: 'flex',padding: '20px 14px',flexDirection: 'column',alignItems: 'center',gap: '14px',background: 'var(--grey-10, #1A1A1A)',borderRadius: '12px',flex: '1 0 0',border: '1px solid #262626'}}>
            <div style={{borderRadius: '12px',border: '1px solid var(--grey-15, #262626)',background: 'var(--grey-19, #1A1A1A)'}}>
              <img src={Cash} alt='frame' style={{borderRadius: '50px',border: '1px solid #CAFF33',background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)',padding: '12px' }}/>
           </div>
            <p style={{ color: 'var(--absolute-white, #FFF)',fontSize: '14px',fontStyle: 'normal',fontWeight: '500'}}>Education Funding</p>
         </div>
         </div>
         </div>

            
      </div>
   {/* </div>   */}



     {/* <div style={{ textAlign: 'center' }}>
      <p style={{ color: 'var(--green-60, #CAFF33)', fontSize: '28px', fontFamily: 'lexend' }} className='font-semibold'>Use case</p>
      <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', paddingBottom: '2rem' }}>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>

      <div style={{ border: '1px solid #262626', borderRadius: '12px', width: '358px', height: '350px', margin: '0 auto' }}>
        <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '10px', padding: '1rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', padding: '20px 14px', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--grey-10, #1A1A1A)', borderRadius: '12px', flex: '1 0 0', border: '1px solid #262626' }}>
            <div style={{ borderRadius: '12px', border: '1px solid var(--grey-15, #262626', background: 'var(--grey-19, 1A1A1A)' }}>
              <img src={Frame} alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)', padding: '12px' }} />
            </div>
            <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '14px', fontStyle: 'normal', fontWeight: '500' }}>Managing Personal Finances</p>
          </div>

          <div style={{ display: 'flex', padding: '20px 14px', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--grey-10, #1A1A1A)', borderRadius: '12px', flex: '1 0 0', border: '1px solid #262626' }}>
            <div style={{ borderRadius: '12px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-19, #1A1A1A)' }}>
              <img src={Frame2} alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)', padding: '12px' }} />
            </div>
            <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '14px', fontStyle: 'normal', fontWeight: '500' }}>Saving for the <br />Future</p>
          </div>

          <div style={{ display: 'flex', padding: '20px 14px', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--grey-10, #1A1A1A)', borderRadius: '12px', flex: '1 0 0', border: '1px solid #262626' }}>
            <div style={{ borderRadius: '12px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-19, #1A1A1A)' }}>
              <img src={House} alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)', padding: '12px' }} />
            </div>
            <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '14px', fontStyle: 'normal', fontWeight: '500' }}>House Ownership</p>
          </div>

          <div style={{ display: 'flex', padding: '20px 14px', flexDirection: 'column', alignItems: 'center', gap: '14px', background: 'var(--grey-10, #1A1A1A)', borderRadius: '12px', flex: '1 0 0', border: '1px solid #262626' }}>
            <div style={{ borderRadius: '12px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-19, #1A1A1A)' }}>
              <img src={Cash} alt='frame' style={{ borderRadius: '50px', border: '1px solid #CAFF33', background: 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)', padding: '12px' }} />
            </div>
            <p style={{ color: 'var(--absolute-white, #FFF)', fontSize: '14px', fontStyle: 'normal', fontWeight: '500' }}>Education Funding</p>
          </div>
        </div>
      </div>
    </div> 

 */}





          <div>
            <p style={{color: 'var(--absolute-white, #FFF)',fontSize: '20px',fontStyle: 'normal',fontWeight: '500', paddingTop:'2rem', fontFamily:'lexend'}}>For Individuals</p>
          <p style={{color: 'var(--grey-70, #B3B3B3)',fontFamily: 'lexend',fontSize: '14px', paddingBottom: '2rem'}}>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
        </div>
        <div style={{display:'flex', padding:'0px 50px', flexDirection:'column', gap:'30px', alignSelf:'stretch'}}>
        <div>
          <h1 style={{color: 'var(--green-60, #CAFF33)', textAlign:'center', fontSize:'40px'}} className='font-bold'>78%</h1>
          <p style={{color:' var(--grey-70, #B3B3B3)', textAlign:'center', fontSize:'14px' , fontFamily:'lexend'}}>Secure Retirement Planning</p>
          <p className='pt-3 text-lg' style={{color:' var(--grey-15, #262626)'}}>-----------------------</p>
        </div>
        <div>
          <h1 style={{color: 'var(--green-60, #CAFF33)', textAlign:'center', fontSize:'40px'}} className='font-bold'>63%</h1>
          <p style={{color:' var(--grey-70, #B3B3B3)', textAlign:'center', fontSize:'14px' , fontFamily:'lexend'}}>Manageable Debts Consolidation</p>
          <p className='pt-3 text-lg' style={{color:' var(--grey-15, #262626)'}}>------------------------</p>
        </div>
        <div>
          <h1 style={{color: 'var(--green-60, #CAFF33)', textAlign:'center', fontSize:'40px'}} className='font-bold'>91%</h1>
          <p style={{color:' var(--grey-70, #B3B3B3)', textAlign:'center', fontSize:'14px' , fontFamily:'lexend'}}>Reducing Financial burdens</p>
          <p className='pt-3 text-lg' style={{color:' var(--grey-15, #262626)'}}>------------------------</p>
        </div>
        <div style={{display:'flex', padding:'14px 20px' ,  justifyContent:'center'}}>
        <button style={{ borderRadius: '82px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-11, #1C1C1C)', width: '118px', height: '48px', }}>
         <p className='text-white font-lexend'>Learn More</p>
        </button>
        </div>

        </div>
   
 </div>
</div>
</div>

  );
}
export default Home;

