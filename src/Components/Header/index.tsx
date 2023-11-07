import {FaUserAlt} from 'react-icons/fa'
import {BiSolidMessageSquareDetail} from 'react-icons/bi'
import {BsFillHeartFill, BsCartCheckFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header className="bg-whiteFixed w-[100%] h-[86px] bg-shadow-100 flex justify-center">
      <nav className="w-[80%] h-[86px] flex justify-between items-center">
        <div className="max-w-screen-xl text-center mt-auto">
					<h2 className="font-kenia text-2xl h-14 gradient-text">Cultura Geek</h2>
        </div>
				<div className='flex '>
					<input type="text" placeholder="Search" className="border-2 rounded-l-4 border-primary w-[300px] h-[40px] p-2"/>
					<select name="" id="" className="bg-whiteFixed border-2 border-primary w-[120px] h-[40px] p-2 text-sm">
						<option value="">All Category</option>
						<option value="">Camisetas</option>
						<option value="">Funko</option>
						<option value="">Chaveiro</option>
					</select>
					<button className="bg-primary text-whiteFixed w-[100px] h-[40px] rounded-r-4 shadow-lg ">Search</button>
				</div>
				<div className='flex space-x-4 text-grey500 text-sm'>
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
					<div className='flex flex-col items-center'>
						<BsCartCheckFill/>
						<small>My Cart</small>
					</div>

				</div>
      </nav>
    </header>
  );
};

export default Header;
