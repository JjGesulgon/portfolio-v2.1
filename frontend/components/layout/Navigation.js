import Link from 'next/link'
import { useState } from 'react';

function Navigation() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className='flex items-center flex-wrap bg-transparent p-3 '>
        <button className='inline-flex p-3 hover:bg-blue-500 rounded lg:hidden text-black ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans'>
                About
              </a>
            </Link>
            <Link href='/projects'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans'>
                Projects
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;