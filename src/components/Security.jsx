import React from 'react'
import Image9 from '../assets/Image-9.png'

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
      <div className='px-[2rem]'>
      <h1 style={{color:'var(--absolute-white, #FFF', fontFamily:'lexend'}} className='text-lg lg:text-2xl text-center lg:text-start'>
           How We <span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}>Protect</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3',}} className='text-sm lg:text-md text-center lg:text-start'>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
      </div>

      {/* grid */}
      <div>
        <div className='grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2  grid-rows-4'>
          <div>

          </div>
          {/* 1 */}

          <div>

          </div>
          {/* 2 */}

          <div>

          </div>
          {/* 3 */}

          <div>
            
          </div>
          {/* 4 */}

        </div>
      </div>

    </div>
    // end of code
  )
}

export default Security