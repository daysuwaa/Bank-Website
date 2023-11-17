import React from 'react'
import Man from '../assets/Image.png'
import Abstract from '../assets/Abstract Design.png'

const Careers = () => {
  return (
    <div>
      <div style={{display:'flex', height:'648px', padding:'40px', gap:'-174px', borderRadius:'20px' }} className="bg-">
      <img src={Abstract} alt='abs' style={{ width: '118px', height: '112px', transform: 'rotate(-90deg)', position: 'absolute', }} />
      <div className='grid grid-cols-2'>
        <div className='h-[408px] w-[658px]' style={{display:'flex', flexDirection:'column', gap:'23px', padding:'60px'}}>
        <div style={{borderRadius: '20px 0px 80px 20px', background: 'var(--grey-10, #1A1A1A)'}}>
          <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'48px', fontFamily:'lexend'}}>
            Welcome to <span style={{color:'var(--green-60, #CAFF33', fontSize:'48px', fontFamily:'lexend'}}>YourBank</span><br></br>Careers
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'16px'}}>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>

        </div>
        </div>
        <div style={{borderRadius:'16px',background: ' lightgray 50% / cover no-repeat, url(<path-to-image>), lightgray 50% / cover no-repeat, lightgray 50% / cover no-repeat', backgroundBlendMode: 'overlay, normal, normal'}}>
          <img src={Man} alt='man' className='w-[715px] h-[568px]'/>

        </div>


      </div>
      {/* end of grid */}
 

      </div>
      {/* end of the first div */}

    </div>
    // end of code
  )
}

export default Careers