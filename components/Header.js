import Image from 'next/image';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';
import logo from '../assets/logo.png';

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleDateChange = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className='sticky top-0 z-50 p-3.5 grid grid-cols-3 bg-white shadow-md md:px-10 '>
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src={logo}
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='rounded-full flex items-center md:border-2  md:shadow-sm justify-between py-1 px-3'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow focus:outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder ? placeholder : 'Start your Search...'}
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 rounded-full p-1 text-white cursor-pointer' />
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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#60A5FA']}
            onChange={handleDateChange}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-3 text-lg outline-none text-blue-400'
              name=''
              id=''
            />
          </div>
          <div className='flex'>
            <button
              onClick={() => setSearchInput('')}
              className='flex-grow text-gray-500 '>
              Cancel
            </button>
            <button onClick={handleSearch} className='flex-grow text-blue-500 '>
              Submit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
