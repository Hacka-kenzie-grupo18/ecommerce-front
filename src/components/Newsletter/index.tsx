import { MdOutlineEmail } from 'react-icons/md'

const Newsletter = () => {
  return (
    <div className='w-full hidden lg:flex lg:flex-col items-center'>
      <div className='m-auto w-[100%] max-w-[1440px] h-[230px] flex justify-center items-center'>
        <div className='flex flex-col items-center'>
          <p className='text-grey600'>Subscribe on our newsletter </p>
          <small className='text-grey500'>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </small>
          <div>
            <input
              className='p-2 pl-8 m-3 rounded-4 relative'
              type='text'
              placeholder='Email'
            />
            <MdOutlineEmail className='absolute left-[18.5rem] top-[218.3rem] text-grey500' />
            <button className='w-[110px] h-[40px] bg-primary rounded-4 text-whiteFixed'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
