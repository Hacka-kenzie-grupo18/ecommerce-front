import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import GooglePlay from '../../assets/Group.png'
import AppleStore from '../../assets/market-button.png'

const Footer = () => {
  return (
    <div className='w-full hidden lg:flex lg:flex-col items-center'>
      <div className='bg-whiteFixed pt-10 m-auto w-[100%] max-w-[1440px] h-[230px] flex justify-around place-items-start'>
        <div className='w-[250px]'>
          <h2 className='font-kenia text-4xl gradient-text mb-3'>
            Cultura Geek
          </h2>
          <small className='text-grey600'>
            Best information about the company gies here but now lorem ipsum is
          </small>
          <div className='text-grey500 flex gap-3 mt-3 text-2xl'>
            <FaFacebook className='cursor-pointer' />
            <AiFillTwitterCircle className='cursor-pointer' />
            <FaLinkedin className='cursor-pointer' />
            <FaInstagram className='cursor-pointer' />
            <FaYoutube className='cursor-pointer' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-grey600 font-500 mb-2'>About</p>
          <small className='text-grey400 cursor-pointer'>About us</small>
          <small className='text-grey400 cursor-pointer'>Find store</small>
          <small className='text-grey400 cursor-pointer'>Categories</small>
          <small className='text-grey400 cursor-pointer'>Blogs</small>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-grey600 font-500'>Information</p>
          <small className='text-grey400 cursor-pointer'>Help center</small>
          <small className='text-grey400 cursor-pointer'>Money Refaud</small>
          <small className='text-grey400 cursor-pointer'>Shipping</small>
          <small className='text-grey400 cursor-pointer'>Contact us</small>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-grey600 font-500'>For users</p>
          <small className='text-grey400 cursor-pointer'>Login</small>
          <small className='text-grey400 cursor-pointer'>Register</small>
          <small className='text-grey400 cursor-pointer'>Settings</small>
          <small className='text-grey400 cursor-pointer'>My Orders</small>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-grey600 font-500'>Get App</p>
          <img src={AppleStore} alt='AppleStore' />
          <img className='mt-2' src={GooglePlay} alt='GooglePlay' />
        </div>
      </div>
      <small className='text-base p-2'>© 2023 Ecommerce. </small>
    </div>
  )
}

export default Footer
