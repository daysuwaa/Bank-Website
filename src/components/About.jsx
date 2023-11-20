import React from 'react'
import Image2 from '../assets/Image-2.png'
import Image3 from '../assets/Image-3.png'
import Image8 from '../assets/Image-8.png'
import Image4 from '../assets/Image-4.png'
import Image6 from '../assets/Image-6.png'
import Image7 from '../assets/Image-7.png'
// import ImageConatiner from '../assets/Image Conatoner.png'
import ImageConatiner2 from '../assets/Image Container-2.png'

const About = () => {
  return (
    <div>
      <div style={{background: 'var(--grey-10, #1A1A1A)'}}>
      <div className='lg:block hidden'>
      <div style={{display:'flex', height:'648px', padding:'40px', gap:'-174px', borderRadius:'20px',  }} className="lg:block hidden">
      <div className='grid grid-cols-2'>
        <div className='h-[408px] w-[658px]' style={{display:'flex', flexDirection:'column', gap:'23px', padding:'60px', }}>
        <p style={{color:'var(--absolute-white, #FFF', fontSize:'18px', fontFamily:'lexend'}}>Welcome to YourBank</p>
        <div style={{borderRadius: '20px 0px 80px 20px', background: 'var(--grey-10, #1A1A1A)',}}>
          <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'38px', fontFamily:'lexend'}}>
           Where Banking Meets <span style={{color:'var(--green-60, #CAFF33', fontSize:'38px', fontFamily:'lexend'}}> Excellence!</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'16px',}}>  At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
        </div>
        </div>
        <div style={{borderRadius:'16px',}}>
          <img src={Image2} alt='man' className=']'/>
        </div>
      </div>
      {/* end of grid */}
      </div>
    </div>  
      {/* end of the first div */}

      {/* for ss */}
      <div className='block lg:hidden justify-center items-center text-center p-[24px]'>
        <img src={Image2} alt='man' className='h-[253px]  mx-auto md:w-[100%]'/>
        <p style={{color:'var(--absolute-white, #FFF', fontSize:'14px', fontFamily:'lexend', paddingTop:'1rem'}}>Welcome to YourBank</p>
        <h1 style={{color:'var(--absolute-white, #FFF', fontSize:'28px', fontFamily:'lexend', textAlign:'center'}}>
          
            Where Banking<br></br> Meets<span style={{color:'var(--green-60, #CAFF33', fontSize:'28px', fontFamily:'lexend'}}> Excellence</span>
          </h1>
          <p style={{color:'var(--grey-70, #B3B3B3', fontSize:'14px', textAlign:'center'}}>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
      </div>
      {/* end of ss */}

      {/* mission % vision */}
      <div>
        <div className='text-center lg:text-start pt-[2rem] px-[1.5rem]'>
        <h1 className=' text-xl lg:text-2xl' style={{color: 'var(--green-60, #CAFF33)', fontFamily:'lexend'}}>Mission & Vison</h1>
        <p className='text-sm lg:text-lg' style={{color: 'var(--grey-70, #B3B3B3)',}} >We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
        </div>

        {/* imagesss */}
        

        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2py-[3rem]'>
          <div>
        <img src={Image8} alt='pix' className='mx-auto pt-10 lg:h-[440px] h-[309px]'/>
        </div>
        
        <div className='lg:px-[2rem] pt-[2rem] lg:my-auto px-[1rem]'>
        <div style={{display:'flex', paddingLeft:'0px',flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}} className=''>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF', paddingLeft:'10px'}}>Mission</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-70, #B3B3B3', fontFamily:'lexend', paddingLeft:'10px'}}>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>   
        </div>
        </div>

        {/* second one */}
        <div className='lg:px-[2rem] pt-[2rem] lg:my-auto px-[1rem]'>
        <div style={{display:'flex', paddingLeft:'0px',flexDirection:'column', alignItems:'flex-start', gap:'20px', flex:'1 0 0', borderLeft:'1px solid var(--green-60, #CAFF33'}} className=''>
          <h1 className='text-xl lg:text-2xl font-bold' style={{color:'var(--absolute-white, #FFF', paddingLeft:'10px'}}>Vision</h1>
          <p  className='text-sm lg:text-md' style={{color:'var(--grey-70, #B3B3B3', fontFamily:'lexend', paddingLeft:'10px'}}>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>   
        </div>
        </div>
        <div>
        <img src={ ImageConatiner2 } alt='pix' className='mx-auto pt-10 lg:h-[440px] h-[309px]'/>
        </div>
    </div>
  </div>
  {/* end of the grid */}


  {/* the next grid */}
  <div>
        <div className='text-center lg:text-start pt-[2rem] px-[1.5rem]'>
        <h1 className=' text-xl lg:text-2xl' style={{color: 'var(--green-60, #CAFF33)', fontFamily:'lexend'}}>Press Releases</h1>
        <p className='text-sm lg:text-lg' style={{color: 'var(--grey-70, #B3B3B3)',}} >Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
  </div>

<div>
  <div className='grid lg:grid-cols-2 lg:grid-rows-2 grid-rows-4 md:grid-cols-2 md:grid-rowspx-[2rem] pt-8'>
    <div className='px-[1.5rem]'>
      <img src={Image3} alt='pix'/>
      <h1 style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend'}} className='text-lg lg:text-2xl, pt-8'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h1>
      <div style={{padding:'12px 20px', alignItems:'center', gap:'10px', paddingTop:'2rem', display:'flex' }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Location: India</p>
            </button>
            <div style={{ alignItems:'center', gap:'10px' }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Date:06/11/2024</p>
            </button>
          </div>
          </div>
          <p style={{color:'var(--grey-70, #B3B3B3)', fontFamily:'lexend'}} className='text-sm lg:text-lg'>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
    </div>
    {/* 1 */}
    <div className='px-[1.5rem] ml-[3rem]'>
    <img src={Image4} alt='pix'/>
      <h1 style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend'}} className='text-lg lg:text-2xl, pt-8'>YourBank Expands Branch Network with Opening of New Location in Chennai</h1>
      <div style={{padding:'12px 20px', alignItems:'center', gap:'10px', paddingTop:'2rem', display:'flex' }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Location: India</p>
            </button>
            <div style={{ alignItems:'center', gap:'10px',  }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Date:12/11/2024</p>
            </button>
          </div>
          </div>
          <p style={{color:'var(--grey-70, #B3B3B3)', fontFamily:'lexend'}} className='text-sm lg:text-lg'>YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
    </div>
    {/* 2 */}
    <div className='px-[1.5rem] pt-8'>
    <img src={Image6} alt='pix'/>
      <h1 style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend'}} className='text-lg lg:text-2xl, pt-8'>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h1>
      <div style={{padding:'12px 20px', alignItems:'center', gap:'10px', paddingTop:'2rem', display:'flex' }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Location: India</p>
            </button>
            <div style={{ alignItems:'center', gap:'10px',  }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Date:24/11/2024</p>
            </button>
          </div>
          </div>
          <p style={{color:'var(--grey-70, #B3B3B3)', fontFamily:'lexend'}} className='text-sm lg:text-lg'>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
    </div>
    {/* 3 */}
    <div className='px-[1.5rem] ml-[3rem] pt-8'>
    <img src={Image7} alt='pix'/>
      <h1 style={{color:'var(--absolute-white, #FFF)', fontFamily:'lexend'}} className='text-lg lg:text-2xl, pt-8'>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h1>
      <div style={{padding:'12px 20px', alignItems:'center', gap:'10px', paddingTop:'2rem', display:'flex' }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Location: India</p>
            </button>
            <div style={{ alignItems:'center', gap:'10px', }}>
            <button style={{borderRadius:'82px',background:'var(--grey-10, #1C1C1C)', width:'115px', height:'45px', color:'var(--absolute-white, #FFF'}}>
              <p>Date:28/11/2024</p>
            </button>
          </div>
          </div>
          <p style={{color:'var(--grey-70, #B3B3B3)', fontFamily:'lexend'}} className='text-sm lg:text-lg'>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers..</p>
    </div>
    {/* 4 */}

  </div>
</div>

  </div>

 

</div>
    </div>
// end of code
  )
}

export default About