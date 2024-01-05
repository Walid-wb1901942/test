import React from 'react'
import InstagramPic from '../assets/InstagramPic_final.jpeg'
import {TypeAnimation} from 'react-type-animation'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]'
            src={InstagramPic} alt="Waleed's Picture"/>
            <div className='w-full  absolute top-0 left-0 bg-gray/100'>
                <div className=' max-w-[700px] m-auto h-full w-full
                 flex flex-col  justify-center mt-20
                lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold
                    text-gray-900' > I'm Waleed Rasheed</h1>
                    <h2 className='flex sm:text-3xl pt-4 text-gray-900'>
                        I'm a 
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s b4 replacing
        'Student at Qatar University',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
      repeat={Infinity}
    />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://twitter.com/waleeda10_" target='_blank'>
                            <FaTwitter className='cursor-pointer' size={20} /></a>
                        <a href="https://www.facebook.com/waleed.alibinali.1/"
                        target='_blank'>
                        <FaFacebookF className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://www.instagram.com/waleedkilanni/" target='_blank'>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://www.linkedin.com/in/waiid-ben-ali-2590a320a/" target='_blank'>
                        <FaLinkedinIn className='cursor-pointer' size={20}/>
                        </a>
                      
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main