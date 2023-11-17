import { useContext } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { LiaStarSolid } from 'react-icons/lia'
import { MdOutlineMessage } from 'react-icons/md'
import { ProductContext } from '../../context/ProductContext'
import { productsProps } from '../../context/ProductContext/types'
// import { IoIosClose } from 'react-icons/io'

const Product = (product: productsProps) => {
  const { addToCart } = useContext(ProductContext)
  console.log(product.name)

  const handleAddToCart = () => {
    console.log('ola', product.name)
    addToCart(product)
  }

  return (
    <section className='p-2 bg-grey200 w-full m-auto mt-8 flex flex-col items-center lg:flex-row md:justify-center lg:gap-10'>
      <div className='bg-whiteFixed border-2 w-[370px] h-[370px] p-2 flex justify-center items-center'>
        <img
          className='w-[350px] h-[350px] object-cover'
          src={''}
          alt='product'
        />
      </div>
      <div className='w-[370px] md:min-w-[370px] md:max-h-[400px] p-2 flex flex-col justify-start'>
        <div className='flex items-center p-2'>
          <BsCheckLg className='text-random7' />
          <span className='text-random7'>Available</span>
          {/* <IoIosClose className='text-alert1'/>
          <span className='text-alert1'>Unavailable</span> */}
        </div>
        <div className='flex items-center p-2'>
          <p className='font-600'>
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </p>
        </div>
        <div className='flex p-2 justify-center'>
          <div className='w[70px] h-[30px] flex items-center justify-center'>
            <LiaStarSolid className='text-yellow-500' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <LiaStarSolid className='text-grey400' />
            <span className='text-yellow-500 ml-1'>1.0</span>
          </div>
          <div className='p-3 w[70px] h-[30px] flex items-center justify-center'>
            <MdOutlineMessage className='text-grey500' />
            <span className='text-grey500 ml-1'>32 reviews</span>
          </div>
          <div className='p-1 w[70px] h-[30px] flex items-center justify-center'>
            <HiOutlineShoppingBag className='text-grey500' />
            <span className='text-grey500 ml-1'>154 sold</span>
          </div>
        </div>
        <div className='bg-brand5 h-[72px] flex p-2 items-center'>
          <div className='w-[50%] flex justify-center items-center'>
            <p className='text-btgXBigF font-600 text-alert1'>R$ 98,00</p>
          </div>
          <div className='w-[2px] h-[50px] bg-grey400'></div>
          <div className='w-[50%] flex flex-col justify-center items-center'>
            <p className='text-btgXBigF font-600 text-primary'>15% OFF</p>
            <small className='text-grey600'>para membros do clube</small>
          </div>
        </div>
        <button
          className='text-whiteFixed mt-4 m-auto w-[100%] lg:max-w-[280px] h-[40px] bg-primary rounded-4'
          onClick={handleAddToCart}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  )
}

export default Product
