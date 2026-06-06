import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewletterBox from '../components/NewletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>
              Forever is a modern e‑commerce destination designed to bring fashion, lifestyle, and everyday essentials closer to you. We believe shopping should be simple, stylish, and stress‑free, which is why we curate collections that blend quality with affordability.
            </p>
            <p>
              From trendy apparel to timeless classics, Forever offers a wide range of products that cater to diverse tastes. Our platform is built with trust and convenience at its core, ensuring that every customer enjoys a seamless shopping experience.
            </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
              Our mission is to redefine online shopping by combining quality assurance, fast delivery, and exceptional customer service. At Forever, we aim to make every purchase feel timeless — because shopping with us should always be Forever.
            </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every product listed on Forever goes through strict quality checks to ensure durability, comfort, and style. We partner only with trusted suppliers so you can shop with confidence.
          </p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            With easy navigation, secure payment options, and fast delivery, Forever makes online shopping effortless. Whether you’re at home or on the go, your favorite products are just a click away.
          </p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated support team is always ready to assist you. From queries to returns, we ensure that your shopping journey remains smooth and satisfying.
          </p>
        </div>
      </div>
      <NewletterBox/>
      
    </div>
  );
}

export default About;
