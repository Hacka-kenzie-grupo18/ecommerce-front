import { AiOutlineClose } from 'react-icons/ai'
import { BiSolidCity } from 'react-icons/bi'
import { BsFillHeartFill, BsHeadset } from 'react-icons/bs'
import { CgBox } from 'react-icons/cg'
import { GrUnorderedList } from 'react-icons/gr'
import { PiUserCircleThin } from 'react-icons/pi'
import { TfiWorld } from 'react-icons/tfi'
import { VscHome } from 'react-icons/vsc'
// import DropDownLoggedIn from './dropdownLoggedIn'
import DropDownLoggedOut from './dropdownLoggedOut'

interface DropDownProps {
  closeDropdown: () => void
}

const DropDown = ({ closeDropdown }: DropDownProps) => {
  const handleItemClick = () => {
    closeDropdown()
  }
  return (
    <div
      className='absolute z-10 top-0 left-0 bg-grey600 w-[100vw] h-[100vh] flex flex-col'
      id='dropdown-container '
    >
      <div
        className='absolute z-10 top-0 left-0 bg-whiteFixed w-[280px] h-[700px] flex flex-col'
        id='dropdown-container '
      >
        <div className='bg-grey200 w-[280px] h-[115px] flex flex-col justify-between p-4'>
          <div className='flex justify-between'>
            <PiUserCircleThin className='text-grey500 text-[60px]' />
            <AiOutlineClose
              className='cursor-pointer text-grey500 text-[16px]'
              onClick={handleItemClick}
            />
          </div>
          {/* <DropDownLoggedIn /> */}
          <DropDownLoggedOut />
        </div>
        <div className='text-grey2 p-4 text-[18px]'>
          <div className='flex items-center'>
            <VscHome className='mr-4' />
            <span>Início</span>
          </div>
          <div className='flex items-center mt-4'>
            <GrUnorderedList className='mr-4' />
            <span>Categorias</span>
          </div>
          <div className='flex items-center mt-4'>
            <BsFillHeartFill className='mr-4' />
            <span>Favoritos</span>
          </div>
          <div className='flex items-center mt-4'>
            <CgBox className='mr-4' />
            <span>Meus pedidos</span>
          </div>
          <div className='mt-6 bg-grey300 w-[250px] h-[2px]'></div>
        </div>
        <div className='text-grey2 p-4 text-[18px]'>
          <div className='flex items-center'>
            <TfiWorld className='mr-4' />
            <span>English | USD</span>
          </div>
          <div className='flex items-center mt-4'>
            <GrUnorderedList className='mr-4' />
            <span>Entre em contato</span>
          </div>
          <div className='flex items-center mt-4'>
            <BsFillHeartFill className='mr-4' />
            <span>Sobre</span>
          </div>
          <div className='mt-6 bg-grey300 w-[250px] h-[2px]'></div>
        </div>
        <div className='text-grey2 p-4 text-[18px]'>
          <div className='flex items-center'>
            <TfiWorld className='mr-4' />
            <span>English | USD</span>
          </div>
          <div className='flex items-center mt-4'>
            <BsHeadset className='mr-4' />
            <span>Entre em contato</span>
          </div>
          <div className='flex items-center mt-4'>
            <BiSolidCity className='mr-4' />
            <span>Sobre</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
