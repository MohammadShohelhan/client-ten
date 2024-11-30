import React from 'react'
  import image1 from '../assets/icons/cups/cup9.png'
  import image2 from '../assets/icons/cups/cup10.png'
  import image3 from '../assets/icons/cups/cup11.png'
  import image4 from '../assets/icons/cups/cup12.png'
  import image5 from '../assets/icons/cups/cup13.png'
  import image6 from '../assets/icons/cups/cup14.png'
  import image7 from '../assets/icons/cups/cup15.png'
  import image8 from '../assets/icons/cups/cup16.png'
 

const FollowUs = () => {
  return (
    <div>

      <div className='text-center space-y-4 py-4'>
        <h4 className='text-lg'> Follow Us Now</h4> 
        <h2 className='text-4xl'>Follow on Instagram</h2>
      </div>
      <div className='grid lg:grid-cols-4 w-[80%] mx-auto gap-8 py-8'>
        <img src={image1} className='object-cover object-center w-full' alt="" />
        <img src={image2}  className='object-cover object-center w-full' alt="" />
        <img src={image3} className='object-cover object-center w-full' alt="" />
        <img src={image4} className='object-cover object-center w-full'  alt="" />
        <img src={image5} className='object-cover object-center w-full' alt="" />
        <img src={image6} className='object-cover object-center w-full' alt="" />
        <img src={image7} className='object-cover object-center w-full'  alt="" />
        <img src={image8} className='object-cover object-center w-full' alt="" />
      </div>
    </div>
  )
}

export default FollowUs