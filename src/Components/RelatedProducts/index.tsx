import FotoOne from '../../assets/foto1.jpg'

const RelatedProducts = () => {
  return (
    <div className='rounded-4 h-[270px] w-[390px] lg:w-[800px] border-2 p-4 mb-20'>
      <h6 className=''>Related products</h6>
      <div className='h-[200px] overflow-y-scroll flex justify-start items-center mt-4'>
        <div className='w-[120px] h-[170px] flex-shrink-0 flex flex-col justify-start'>
          <div className='w-[100px] h-[100px] m-2 bg-grey300 rounded-4 flex flex-col items-start'>
            <img
              className='w-[100px] h-[100px] object-contain'
              src={FotoOne}
              alt='camiseta p verde'
            />
          </div>
          <div className='ml-2'>
            <small className='text-grey600'>Xiaomi Redmi 8</small>
            <br />
            <small className='text-grey500'>R$ 32,00</small>
          </div>
        </div>
        <div className='w-[120px] h-[170px] flex-shrink-0 flex flex-col justify-start'>
          <div className='w-[100px] h-[100px] m-2 bg-grey300 rounded-4 flex flex-col items-start'>
            <img
              className='w-[100px] h-[100px] object-contain'
              src={FotoOne}
              alt='camiseta p verde'
            />
          </div>
          <div className='ml-2'>
            <small className='text-grey600'>Xiaomi Redmi 8</small>
            <br />
            <small className='text-grey500'>R$ 32,00</small>
          </div>
        </div>
        <div className='w-[120px] h-[170px] flex-shrink-0 flex flex-col justify-start'>
          <div className='w-[100px] h-[100px] m-2 bg-grey300 rounded-4 flex flex-col items-start'>
            <img
              className='w-[100px] h-[100px] object-contain'
              src={FotoOne}
              alt='camiseta p verde'
            />
          </div>
          <div className='ml-2'>
            <small className='text-grey600'>Xiaomi Redmi 8</small>
            <br />
            <small className='text-grey500'>R$ 32,00</small>
          </div>
        </div>
        <div className='w-[120px] h-[170px] flex-shrink-0 flex flex-col justify-start'>
          <div className='w-[100px] h-[100px] m-2 bg-grey300 rounded-4 flex flex-col items-start'>
            <img
              className='w-[100px] h-[100px] object-contain'
              src={FotoOne}
              alt='camiseta p verde'
            />
          </div>
          <div className='ml-2'>
            <small className='text-grey600'>Xiaomi Redmi 8</small>
            <br />
            <small className='text-grey500'>R$ 32,00</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
