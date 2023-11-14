import { HiOutlineShoppingBag } from 'react-icons/hi'
import { LiaStarSolid } from 'react-icons/lia'
import { MdOutlineMessage } from 'react-icons/md'

const Comments = () => {
  return (
    <div className='rounded-4 mt-4 p-2 overflow-y-scroll h-[400px] w-[370px] lg:w-[780px] border-2'>
      <h6 className='pl-3 pt-3'>Camiseta Star Wars P</h6>
      <div className='flex p-2'>
        <div className='w[70px] h-[30px] flex items-center justify-center'>
          <LiaStarSolid className='text-yellow-500' />
          <LiaStarSolid className='text-yellow-500' />
          <LiaStarSolid className='text-yellow-500' />
          <LiaStarSolid className='text-grey400' />
          <LiaStarSolid className='text-grey400' />
          <span className='text-yellow-500 ml-1'>3.0</span>
        </div>
        <div className='p-3 w[70px] h-[30px] flex items-center justify-center'>
          <MdOutlineMessage className='text-grey500' />
          <span className='text-grey500 ml-1'>3 reviews</span>
        </div>
        <div className='p-1 w[70px] h-[30px] flex items-center justify-center'>
          <HiOutlineShoppingBag className='text-grey500' />
          <span className='text-grey500 ml-1'>3 sold</span>
        </div>
      </div>
      <div className='mt-2 p-3 max-h-32 bg-yellow-50'>
        <div className='flex items-center gap-4'>
          <span>Carla Silva</span>
          <div className='w[70px] h-[30px] flex items-center justify-center'>
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <span className='text-yellow-500 ml-1'>1.0</span>
          </div>
        </div>
        <small>
          Lorem ismallsum dolor sitLorem ismallsum dolor sitLorem ismallsum
          dolor sitLorem ismallsum dolor sit
        </small>
      </div>
      <div className='mt-2 p-3 max-h-32 bg-yellow-50'>
        <div className='flex items-center gap-4'>
          <span>Pedro Sampaio</span>
          <div className='w[70px] h-[30px] flex items-center justify-center'>
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <span className='text-yellow-500 ml-1'>3.0</span>
          </div>
        </div>
        <small>
          Lorem ismallsum dolor sitLorem ismallsum dolor sitLorem ismallsum
        </small>
      </div>
      <div className='mt-2 p-3 max-h-32 bg-yellow-50'>
        <div className='flex items-center gap-4'>
          <span>Sandy Jr.</span>
          <div className='w[70px] h-[30px] flex items-center justify-center'>
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-yellow-500' />
            <span className='text-yellow-500 ml-1'>5.0</span>
          </div>
        </div>
        <small>dolor sitLorem ismallsum dolor sit</small>
      </div>
    </div>
  )
}

export default Comments
