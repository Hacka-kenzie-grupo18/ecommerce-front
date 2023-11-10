import { BiSolidMessageSquareDetail } from "react-icons/bi"
import { BsFillHeartFill, BsCartCheckFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"

const DeskHeader = () => {
  return (
    <header className='bg-whiteFixed w-[100%] h-[86px] flex justify-center'>
      <nav className='max-w-[900px] lg:w-[100%] xl:w-[80%] h-[86px] flex justify-between items-center'>
        <div className='max-w-screen-xl text-center mt-auto'>
          <h2 className='font-kenia text-xl h-14 gradient-text pl-2'>
            Cultura Geek
          </h2>
        </div>
        <div className='flex'>
          <input
            type='text'
            placeholder='Search'
            className='border-2 rounded-l-4 border-primary w-[250px] h-[40px] p-2'
          />
          <select
            name=''
            id=''
            className='bg-whiteFixed border-2 border-primary w-[120px] h-[40px] p-2 text-sm'
          >
            <option value=''>All Category</option>
            <option value=''>Camisetas</option>
            <option value=''>Funko</option>
            <option value=''>Chaveiro</option>
          </select>
          <button className='bg-primary text-whiteFixed w-[100px] h-[40px] rounded-r-4 shadow-lg '>
            Search
          </button>
        </div>
        <div className='flex space-x-2 text-grey500 text-sm'>
          <div className='flex flex-col items-center'>
            <FaUserAlt />
            <small>Perfil</small>
          </div>
          <div className='flex flex-col items-center'>
            <BiSolidMessageSquareDetail />
            <small>Mensagens</small>
          </div>
          <div className='flex flex-col items-center'>
            <BsFillHeartFill />
            <small>Favoritos</small>
          </div>
          <div className='flex flex-col items-center lg:pr-2'>
            <BsCartCheckFill />
            <small>Meu Carrinho</small>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default DeskHeader
