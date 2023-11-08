import { useEffect, useState } from 'react'
import { BiSearch, BiSolidMessageSquareDetail, BiUserCircle } from 'react-icons/bi'
import { BsCartCheckFill, BsFillHeartFill, BsCart3 } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { RxDropdownMenu } from 'react-icons/rx'

const Header = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false)
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 760px)');
		setIsScreenSmall(mediaQuery.matches);

		const mediaQueryListener = (event:any) => {
			setIsScreenSmall(event.matches);
		};

		mediaQuery.addListener(mediaQueryListener);

		return () => {
			mediaQuery.removeListener(mediaQueryListener);
		};
	}, []);
			
	return (
    <>
      {isScreenSmall ? (
				<header className="bg-whiteFixed w-[100%] flex flex-col justify-center">
				<nav className="pl-2 pr-2 sm:w-[100%] md:w-[100%] lg:w-[80%] sm:h-[56px] md:h-[64px] lg:h-[86px] flex justify-between flex-col">
					<div className='flex items-center justify-between sm:h-[56px] md:h-[64px] lg:h-[86px]'>
						<div className='flex items-center'>
							<RxDropdownMenu className="ml-2 text-2xl text-grey500"/>
							<h2 className="font-kenia text-xl gradient-text ml-2">Cultura Geek</h2>
						</div>
						<div className='flex'>
							<BsCart3 className="text-grey500 text-xl  mr-4"/>
							<BiUserCircle className="text-grey500 text-xl"/>
						</div>
					</div>
				</nav>
				<div className='relative'>
					<input type="text" placeholder='Search' className='border-2 rounded-4 border-grey200 bg-grey200 w-[96%] h-[40px] pl-10 m-2' />
					<BiSearch className="absolute top-5 left-5 text-grey500 text-lg"/>
				</div>
				</header>
      ) : (
        <div>
          <header className="bg-whiteFixed w-[100%] h-[86px] bg-shadow-100 flex justify-center">
						<nav className="bg-red-500 max-w-[900px] lg:w-[100%] xl:w-[80%] h-[86px] flex justify-between items-center">
							<div className="max-w-screen-xl text-center mt-auto">
								<h2 className="font-kenia text-xl h-14 gradient-text pl-2">Cultura Geek</h2>
							</div>	
							<div className='flex'>
								<input type="text" placeholder="Search" className="border-2 rounded-l-4 border-primary w-[250px] h-[40px] p-2"/>
								<select name="" id="" className="bg-whiteFixed border-2 border-primary w-[120px] h-[40px] p-2 text-sm">
									<option value="">All Category</option>
									<option value="">Camisetas</option>
									<option value="">Funko</option>
									<option value="">Chaveiro</option>
								</select>
								<button className="bg-primary text-whiteFixed w-[100px] h-[40px] rounded-r-4 shadow-lg ">Search</button>
							</div>			
							<div className='flex space-x-2 text-grey500 text-sm'>
								<div className='flex flex-col items-center'>
									<FaUserAlt/>
									<small>Profile</small>
								</div>
								<div className='flex flex-col items-center'>
									<BiSolidMessageSquareDetail/>
									<small>Message</small>
								</div>
								<div className='flex flex-col items-center'>
									<BsFillHeartFill/>
									<small>Favorite</small>
								</div>
								<div className='flex flex-col items-center lg:pr-2'>
									<BsCartCheckFill/>
									<small>My Cart</small>
								</div>
							</div>
						</nav>
					</header>
				</div>
      )}
    </>
  )
}

export default Header