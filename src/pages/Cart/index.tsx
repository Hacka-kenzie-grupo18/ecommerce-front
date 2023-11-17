import { useEffect, useState } from 'react'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { BsCartCheckFill, BsFillHeartFill } from 'react-icons/bs'
import { FaArrowLeft, FaUserAlt } from 'react-icons/fa'
import { MdOutlineDeleteOutline, MdOutlineFavorite } from 'react-icons/md'
import { SlOptionsVertical } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Foto1 from '../../assets/foto1.jpg'
import Footer from '../../components/Footer'

const Cart = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false)
  const [tabIsOpen, setTabIsOpen] = useState(false)

  const tabDeleteAndSave = () => {
    setTabIsOpen(!tabIsOpen)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)')
    setIsScreenSmall(mediaQuery.matches)

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setIsScreenSmall(event.matches)
    }

    mediaQuery.addListener(mediaQueryListener)

    return () => {
      mediaQuery.removeListener(mediaQueryListener)
    }
  }, [])

  return (
    <>
      {isScreenSmall ? (
        <div>
          <div className='flex items-center gap-4 p-4'>
            <Link to='/'>
              <FaArrowLeft className='text-grey600 text-xl' />
            </Link>
            <p className='font-500'>Shopping cart </p>
          </div>
          <div className='w-[100%] h-[2px] bg-slate-200'></div>
        </div>
      ) : (
        <div>
          <header className='flex justify-between py-4 w-[90%] max-w-[1440px] m-auto'>
            <h2 className='font-kenia text-4xl gradient-text mb-3'>
              Cultura Geek
            </h2>
            <div className='flex space-x-2 text-grey500 text-sm'>
              <div className='flex flex-col items-center cursor-pointer'>
                <FaUserAlt />
                <small>Perfil</small>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <BiSolidMessageSquareDetail />
                <small>Mensagens</small>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <BsFillHeartFill />
                <small>Favoritos</small>
              </div>
              <div className='flex flex-col items-center lg:pr-2 cursor-pointer'>
                <BsCartCheckFill />
                <small>Meu Carrinho</small>
              </div>
            </div>
          </header>
        </div>
      )}
      <section className='lg:py-0 w-[90%] max-w-[1440px] m-auto mb-4'>
        <p className='p-4'>Meus itens (3)</p>
        <div className='w-[100%] h-[100vh] lg:h-[400px] flex flex-col lg:flex lg:flex-row lg:justify-between'>
          <main className='w-[100%] p-4'>
            <ul className='w-[100%] max-h-[250px] lg:min-h-[400px] lg:w-[100%] lg:max-w-[840px] overflow-y-auto p-2 border-2 rounded-4'>
              {isScreenSmall ? (
                <li className='border-b-2 h-[160px] my-2'>
                  <div className='flex justify-between items-start gap-4 py-2'>
                    <div className='flex items-center gap-3'>
                      <div className='w-[70px] h-[70px] bg-grey300 p-1 rounded-4'>
                        <img
                          className='w-[60px] h-[60px] object-fill'
                          src={Foto1}
                          alt='produto'
                        />
                      </div>
                      <div>
                        <span>T-shirts with multiple colors for men</span>
                        <br />
                        <small>Size: M, Color: blue</small>
                      </div>
                    </div>
                    <SlOptionsVertical
                      className='text-xl text-grey600 cursor-pointer relative'
                      onClick={tabDeleteAndSave}
                    />
                    {tabIsOpen && (
                      <div className='flex flex-col gap-4 bg-whiteFixed border-2 p-3 rounded-bl-4 rounded-tl-4 absolute top-30 right-14'>
                        <MdOutlineDeleteOutline className='text-xl text-grey600 cursor-pointer' />
                        <MdOutlineFavorite className='text-xl text-grey600 cursor-pointer' />
                      </div>
                    )}
                  </div>
                  <div className='w-[100%] h-[50px] flex justify-between items-center'>
                    <div className='flex'>
                      <p className='py-1 px-2 bg-whiteFixed border-2 rounded-bl-4 rounded-tl-4 cursor-pointer text-grey600 font-600'>
                        +
                      </p>
                      <p className='py-1 px-3 bg-whiteFixed border-y-2 font-600'>
                        1
                      </p>
                      <p className='py-1 px-3 bg-whiteFixed border-2 rounded-br-4 rounded-tr-4 cursor-pointer text-xl text-grey600 font-600'>
                        -
                      </p>
                    </div>
                    <p className='text-grey600 font-600'>R$ 45,00</p>
                  </div>
                </li>
              ) : (
                <li className='border-b-2 h-[160px] my-2'>
                  <div className='flex justify-between items-start gap-4 py-2'>
                    <div className='flex items-center gap-3'>
                      <div className='w-[70px] h-[70px] bg-grey300 p-1 rounded-4'>
                        <img
                          className='w-[60px] h-[60px] object-fill'
                          src={Foto1}
                          alt='produto'
                        />
                      </div>
                      <div className='min-w-[165px]'>
                        <span>T-shirts with multiple colors for men</span>
                        <br />
                        <small>Size: M, Color: blue</small>
                      </div>
                    </div>
                    <p className='text-grey600 font-600'>R$ 45,00</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-5 ml-20'>
                      <button className='py-1 px-4 text-alert1 border-2 rounded-4'>
                        Excluir
                      </button>
                      <button className='py-1 px-4 text-primary border-2 rounded-4'>
                        Salvar
                      </button>
                    </div>
                    <input
                      type='number'
                      className='p-1 border-2 rounded-4 w-16 text-center text-grey600 font-600'
                      defaultValue='1'
                      min='1'
                      placeholder='Quantidade'
                    />
                  </div>
                </li>
              )}
            </ul>
            <div className='hidden lg:max-w-[840px] lg:flex w-[100%] lg:gap-4 mt-4 lg:justify-between'>
              <button className='border-2 rounded-4 py-2 px-8 bg-primary text-whiteFixed'>
                Início
              </button>
              <button className='border-2 border-grey300 rounded-4 py-2 px-8 text-primary'>
                Remover Tudo
              </button>
            </div>
          </main>
          <aside className='w-[90%] h-[300px] lg:min-w-[280px] lg:max-w-[280px] m-4 flex justify-center flex-col items-center'>
            <div className='w-[280px] h-[120px] flex flex-col justify-center border-2 rounded-4 p-2 gap-4'>
              <p className='text-grey600'>Tem um cupom?</p>
              <div>
                <input
                  className='w-[170px] p-2 rounded-bl-4 rounded-tl-4 bg-whiteFixed border-2 border-grey300'
                  type='text'
                  placeholder='Código do cupom'
                />
                <button className='w-[85px] rounded-br-4 rounded-tr-4 p-2 bg-whiteFixed border-2 text-primary'>
                  Aplicar
                </button>
              </div>
            </div>
            <div className='w-[280px] h-[250px] flex flex-col justify-between border-2 rounded-4 p-4 mt-4'>
              <div className='bg-whiteFixed text-grey600'>
                <div className='flex justify-between'>
                  <small>Subtotal:</small>
                  <small>R$ 1403.97</small>
                </div>
                <div className='flex justify-between'>
                  <small>Subtotal:</small>
                  <small>R$ 1403.97</small>
                </div>
                <div className='flex justify-between'>
                  <small>Subtotal:</small>
                  <small>R$ 1403.97</small>
                </div>
                <div className='w-[100%] h-[1px] bg-grey400'></div>
              </div>
              <div className='flex justify-between items-center'>
                <small className='font-500'>Total:</small>
                <p className='font-700'>R$ 1403.97</p>
              </div>
              <button className='w-[100%] h-[50px] rounded-4 bg-random13 text-whiteFixed'>
                Finalizar compra
              </button>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cart
