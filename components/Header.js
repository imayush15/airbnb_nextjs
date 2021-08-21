import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 p-3.5 grid grid-cols-3 bg-white shadow-md md:px-10 '>
      {/* Left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='rounded-full flex items-center md:border-2  md:shadow-sm justify-between py-1 px-3'>
        <input
          className='flex-grow focus:outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Start Your Search...'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 rounded-full p-1 text-white cursor-pointer' />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline-flex'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 rounded-full px-2 py-1'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default Header;
