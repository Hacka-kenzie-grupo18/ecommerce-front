import { useState } from 'react'
import { BiSearch, BiUserCircle } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineViewList } from 'react-icons/hi'
import DropDown from '../../DropDown'

const MobileHeader = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const closeDropdown = () => {
    setDropdown(false)
  }

  return (
    <header className='bg-whiteFixed w-[100%] flex flex-col justify-center'>
      <nav className='pl-2 pr-2 sm:w-[100%] md:w-[100%] lg:w-[80%] sm:h-[56px] md:h-[64px] lg:h-[86px] flex justify-between flex-col'>
        <div className='flex items-center justify-between sm:h-[56px] md:h-[64px] lg:h-[86px]'>
          <div className='flex items-center'>
            <HiOutlineViewList
              onClick={handleDropdown}
              className='z-10 cursor-pointer ml-2 text-2xl text-grey500'
            />
            {dropdown && <DropDown closeDropdown={closeDropdown} />}
            <h2 className='font-kenia text-xl gradient-text ml-2'>
              Cultura Geek
            </h2>
          </div>
          <div className='flex'>
            <BsCart3 className='text-grey500 text-xl  mr-4' />
            <BiUserCircle className='text-grey500 text-xl' />
          </div>
        </div>
      </nav>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search'
          className='border-2 rounded-4 border-grey200 bg-grey200 w-[96%] h-[40px] pl-10 m-2'
        />
        <BiSearch className='absolute top-5 left-5 text-grey500 text-lg' />
      </div>
    </header>
  )
}

export default MobileHeader
