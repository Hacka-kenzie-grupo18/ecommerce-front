const NavBarHeader = () => {
  return (
    <section className='h-[56px] w-[100%] flex justify-center items-center border-2 border-grey300'>
      <div className='max-w-[900px] lg:w-[100%] xl:w-[80%] h-[56px] flex justify-between items-center'>
        <div className='flex justify-center ml-2'>
          <p className='mr-4'>Início</p>
          <p className='mr-4'>Categorias</p>
          <p className='mr-4'>Favoritos</p>
          <p className='mr-4'>Meu carrinho</p>
          <select name='' id='' className='bg-whiteFixed pl-2'>
            <option disabled selected>
              Ajuda
            </option>
            <option value=''>Fale conosco</option>
            <option value=''>Sobre</option>
            <option value=''>Política de privadidade</option>
          </select>
        </div>
        <div className=''>
          <select name='' id='' className='mr-4 lg:mr-1 bg-whiteFixed'>
            <option value=''>English, USD</option>
            <option value=''>Portugal, €</option>
            <option value=''>Brazil, R$</option>
          </select>

          <select name='' id='' className='mr-4 bg-whiteFixed'>
            <option value=''>Ship to 🇺🇸 </option>
            <option value=''>Ship to 🇵🇹 </option>
            <option value=''>Ship to 🇧🇷 </option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default NavBarHeader
