import React from 'react'
import Image9 from '../assets/Image-9.png'
import Icon39 from '../assets/Icon-39.png'
import Icon40 from '../assets/Icon-40.png'
import Icon41 from '../assets/Icon-41.png'
import Icon42 from '../assets/Icon-42.png'
import DownA from '../assets/Icon-33.png';

const Security = () => {
  return (
    <div>
      <div className='lg:block hidden'>
      <div style={{display:'flex', height:'648px', padding:'40px', gap:'-174px', borderRadius:'20px',  }} className="lg:block hidden">
      <div className='grid grid-cols-2'>
        <div className='h-[408px] w-[658px]' style={{display:'flex', flexDirection:'column', gap:'23px', padding:'60px'}}>
        <div style={{borderRadius: '20px 0px 80px 20px'}}>
          <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'48px', fontFamily:'lexend'}}>
            Your Security is Our  <span style={{color:'var(--green-60, #CAFF33', fontSize:'48px', fontFamily:'lexend'}}><br></br>Top Priorty</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'16px', }} >At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>

        </div>
        </div>
        <div style={{borderRadius:'16px',}}>
          <img src={Image9} alt='man' className='w-[715px] h-[568px]'/>
        </div>
      </div>
      {/* end of grid */}
      </div>
    </div>  
      {/* end of the first div */}

      {/* for ss */}
      <div className='block lg:hidden justify-center items-center text-center p-[24px]'>
        <img src={Image9} alt='man' className='h-[253px] w-[100%]'/>
        <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'28px', fontFamily:'lexend', textAlign:'center'}}>
           Your Security is our  <span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}><br></br>Top priority</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'14px', textAlign:'center'}}>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
      </div>
      {/* end of ss */}

      {/* hw we protect you */}
      <div className='px-[3rem]'>
      <h1 style={{color:'var(--absolute-white, #FFF', fontFamily:'lexend'}} className='text-2xl lg:text-3xl text-center lg:text-start'>
           How We <span style={{color:'var(--green-60, #CAFF33', fontFamily:'lexend'}}>Protect</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3',}} className='text-sm lg:text-md text-center lg:text-start'>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
      </div>

      {/* grid */}
      <div className='px-[3rem] pt-8'>
        <div className='grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2  grid-rows-4'>
        <div className='pb-7 ' >
        <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}} className=''>
          <div className='py-[1.7rem]'>
          <div className='flex '>
          <img src={Icon39} alt='icon' className='pl-6' />
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF)', paddingLeft:'10px'}}>Secure Online Banking Platform</h1>
          </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend', paddingLeft:'10px'}}>Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.</p>
       </div> 
       </div>
       </div>

       <div className='pb-7 lg:pl-6'>
       <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='lg:pl-[2rem] py-[1.7rem]'>
         <div className='flex'>
          <img src={Icon40} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF)', paddingLeft:'10px'}}>Multi-Factor Authentication</h1>
         </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend', paddingLeft:'10px'}}>To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.</p>   
        </div>
        </div>
      </div>  
       

      <div className='pb-7'>
        <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='py-[1.7rem]'>
        <div className='flex'>
          <img src={Icon41} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF)', paddingLeft:'10px'}}>Fraud Monitoring</h1>
        </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend', paddingLeft:'10px'}}>We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>   
        </div>
        </div>
        </div>
      
        <div className='pb-7 lg:pl-6'>
       <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='lg:pl-[2rem] py-[1.7rem]'>
        <div className='flex'>
          <img src={Icon42} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF)', paddingLeft:'10px'}}>Secure Mobile Banking</h1>
          </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend', paddingLeft:'10px'}}>Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.</p>   
        </div>
        </div>
        </div>
        </div>
      </div>

      {/* faq */}
      <div className='px-[4rem]'>
  <p style={{ color: 'var(--green-60, #CAFF33)', fontStyle: 'normal', fontWeight: '500', lineHeight: '57px', }} className='font-extrabold text-3xl text-center lg:text-4xl lg:text-start'>
    Frequently <span style={{ color: 'var(--absolute-white, #FFF)' }}>Asked Questions</span>
  </p>
  <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend',  letterSpacing: '-0.084px', lineHeight: '21px', paddingTop: '15px' }} className='text-center lg:text-start text-sm lg:text-sm'> Still have any questions? Contact our Team via support@yourbank.com</p>

  <div className='pt-5'>
    <div className='grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 '>

      
      <div style={{ borderRadius: '10px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-11, #1C1C1C)', padding: '30px' }}>
        <h1 style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'lexend', fontSize: '18px', fontStyle: 'normal', lineHeight: '27px', flex: '1 0 0' }}>How do I open an account with YourBank?</h1>
        <p className='w-[278px] text-gray-400 lg:block hidden'>-------------------------------------</p>
        <p className='w-[278px] text-gray-400 lg:hidden block'>-----------------------</p>
        <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', letterSpacing: '-0.084px', lineHeight: '21px', paddingTop: '15px' }}>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
      </div>
    

      
      <div style={{ borderRadius: '10px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-11, #1C1C1C)', padding: '30px' }}>
        <h1 style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'lexend', fontSize: '18px', fontStyle: 'normal', lineHeight: '27px', flex: '1 0 0' }}>What documents do I need to provide to apply for a loan?</h1>
        <p className='w-[278px] text-gray-400 lg:block hidden'>-------------------------------------</p>
        <p className='w-[278px] text-gray-400 lg:hidden block'>-----------------------</p>
        <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', letterSpacing: '-0.084px', lineHeight: '21px', paddingTop: '15px' }}>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
      </div>
     

      
      <div style={{ borderRadius: '10px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-11, #1C1C1C)', padding: '30px' }}>
        <h1 style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'lexend', fontSize: '18px', fontStyle: 'normal', lineHeight: '27px', flex: '1 0 0' }}>How can I access my accounts online?</h1>
        <p className='w-[278px] text-gray-400 lg:block hidden'>-------------------------------------</p>
        <p className='w-[278px] text-gray-400 lg:hidden block'>-----------------------</p>
        <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', letterSpacing: '-0.084px', lineHeight: '21px', paddingTop: '15px' }}>Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
      </div>
     

     
      <div style={{ borderRadius: '10px', border: '1px solid var(--grey-15, #262626)', background: 'var(--grey-11, #1C1C1C)', padding: '30px' }}>
        <h1 style={{ color: 'var(--absolute-white, #FFF)', fontFamily: 'lexend', fontSize: '18px', fontStyle: 'normal', lineHeight: '27px', flex: '1 0 0' }}>Are my transactions and personal information secure?</h1>
        <p className='w-[278px] text-gray-400 lg:block hidden'>-------------------------------------</p>
        <p className='w-[278px] text-gray-400 lg:hidden block'>-----------------------</p>
        <p style={{ color: 'var(--grey-70, #B3B3B3)', fontFamily: 'lexend', fontSize: '14px', letterSpacing: '-0.084px', lineHeight: '21px', paddingTop: '15px' }}>At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
      </div>
          </div>

          <div className='flex item-center justify-center pt-[18px]'>
            <button style={{display:'flex', borderRadius: '100px', padding: '14px 20px', justifyContent: 'center', alignItems: 'center',  gap: '4px', border: '1px solid var(--grey-15, #262626)' }} className='w-[154px] h-[49px]'>
              <p style={{ color: 'white', fontFamily: 'lexend', fontSize: '14px', fontWeight: '400', lineHeight: '150%' }} className="">
              Load All FAQ's
              </p>
              <img src={DownA} alt='down'/>
            </button>
            </div>
    </div>
  </div>
    

    </div>
    // end of code
  )
}

export default Security