import React from 'react'
import Man from '../assets/Image.png'
import Abstract from '../assets/Abstract Design.png'
import Icon35 from '../assets/Icon-35.png'
import Icon36 from '../assets/Icon-36.png'
import Icon37 from '../assets/Icon-37.png'
import Icon38 from '../assets/Icon-38.png'

const Careers = () => {
  return (
    <div style={{background: 'var(--grey-10, #1A1A1A)'}}>
      <div className='lg:block hidden'>
      <div style={{display:'flex', height:'648px', padding:'40px', gap:'-174px', borderRadius:'20px',  }} className="lg:block hidden">
      <img src={Abstract} alt='abs' style={{ width: '118px', height: '112px', transform: 'rotate(-90deg)', position: 'absolute', }} />
      <div className='grid grid-cols-2'>
        <div className='h-[408px] w-[658px]' style={{display:'flex', flexDirection:'column', gap:'23px', padding:'60px'}}>
        <div style={{borderRadius: '20px 0px 80px 20px', background: 'var(--grey-10, #1A1A1A)'}}>
          <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'48px', fontFamily:'lexend'}}>
            Welcome to <span style={{color:'var(--green-60, #CAFF33', fontSize:'48px', fontFamily:'lexend'}}>YourBank</span><br></br>Careers!
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'16px'}}>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>

        </div>
        </div>
        <div style={{borderRadius:'16px',}}>
          <img src={Man} alt='man' className='w-[715px] h-[568px]'/>
        </div>
      </div>
      {/* end of grid */}
      </div>
    </div>  
      {/* end of the first div */}

      {/* for ss */}
      <div className='block lg:hidden justify-center items-center text-center p-[24px]'>
        <img src={Man} alt='man' className='h-[253px] w-[100%]'/>
        <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'28px', fontFamily:'lexend'}}>
            Welcome to <span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}>YourBank</span><br></br>Careers!
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'14px', textAlign:'center'}}>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
      </div>
      {/* end of ss */}

      {/* main code */}
      {/* begining of values */}
      <div className='lg:pl-10 p-[2rem]'>
        <h1 className='text-center lg:text-start ' style={{color:'var(--absolute-white, #FFF', fontSize:'28px', fontFamily:'lexend'}}>Our <span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}>Values</span></h1>
        <p style={{color:'var(--grey-70, #B3B3B3'}} className='text-sm lg:text-lg text-center lg:text-start'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        
        {/* the grid beginnning */}
        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 py-[3rem]'>
        <div style={{display:'flex', paddingLeft:'0px', flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}}>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Integrity</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
        </div>
        
        <div className='lg:pl-[2rem] pt-[2rem]'>
        <div style={{display:'flex', paddingLeft:'0px',flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}}>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Customer Centricity</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>   
        </div>
        </div>

        <div className='pt-[2rem]'>
        <div style={{display:'flex', paddingLeft:'0px',flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}}>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Collaboration</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>   
        </div>
        </div>

        <div className='lg:pl-[2rem] pt-[2rem]'>
        <div style={{display:'flex', paddingLeft:'0px',flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}}>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Innovation</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>   
        </div>
        </div>

        </div>
      </div>
      {/* end of values*/}

      {/* beginning of benefits */}
      <div className='lg:pl-10 p-[2rem]' >
        <h1 className='text-center lg:text-start ' style={{color:'var(--absolute-white, #FFF', fontSize:'28px', fontFamily:'lexend'}}>Our <span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}>Benefits</span></h1>
        <p style={{color:'var(--grey-70, #B3B3B3'}} className='text-sm lg:text-lg text-center lg:text-start'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
        
        {/* the grid beginnning */}
        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 py-[3rem]'>
       
        <div className='pb-7 ' >
        <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}} className=''>
          <div className='py-[1.7rem]'>
          <div className='flex '>
          <img src={Icon35} alt='icon' className='pl-6' />
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Competitive Compensation</h1>
          </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
       </div> 
       </div>
       </div>

       <div className='pb-7 lg:pl-6'>
       <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='lg:pl-[2rem] py-[1.7rem]'>
         <div className='flex'>
          <img src={Icon36} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Health and Wellness</h1>
         </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>   
        </div>
        </div>
      </div>  
       

      <div className='pb-7'>
        <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='py-[1.7rem]'>
        <div className='flex'>
          <img src={Icon37} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Retirement Planning</h1>
        </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>   
        </div>
        </div>
        </div>
      
        <div className='pb-7 lg:pl-6'>
       <div style={{borderRadius:'40px 14px', border:'1px solid rgba(202, 255, 51, 0.10', padding:'20px'}}>
        <div className='lg:pl-[2rem] py-[1.7rem]'>
        <div className='flex'>
          <img src={Icon38} alt='icon' className='pl-6'/>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--grey-30, #4C4C4D', paddingLeft:'10px'}}>Work-Life Balance</h1>
          </div>
          <p  className='text-sm lg:text-md pt-6' style={{color:'var(--grey-30, #4C4C4D', fontFamily:'lexend', paddingLeft:'10px'}}>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>   
        </div>
        </div>
        </div>
      

        </div>
      </div>
      {/* end of bene */}



    </div>
    // end of code
  )
}

export default Careers