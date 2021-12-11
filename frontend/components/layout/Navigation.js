import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from 'react';

function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const navbarOnScroll = () => {
    if(window.scrollY >= 80){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  };

  if(process.browser){
    window.addEventListener('scroll', navbarOnScroll);
  }

  return (
    <div className={`${colorChange ? 'onScrollColor' : 'bg-transparent'} sticky top-0 z-50`}>
      <nav className='flex items-center flex-wrap bg-transparent p-3'>
        <div className='hidden lg:block'>
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-white h-8 w-8 mr-2'
              >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
              </svg>
              <span className='text-xl font-base uppercase tracking-wide'>
                JJ GESULGON
              </span>
            </a>
          </Link>
        </div>
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
              <a className={`${router.pathname == "/" ? "text-blue-600" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans`}>
                About
              </a>
            </Link>
            <Link href='/projects'>
              <a className={`${router.pathname == "/projects" ? "text-blue-600" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans`}>
                Projects
              </a>
            </Link>
            {/* <Link href='/projects'>
              <a className={`${router.pathname == "/projects" ? "text-blue-600" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans`}>
                Blog
              </a>
            </Link> */}
            <Link href='/contact-me'>
              <a className={`${router.pathname == "/contact-me" ? "text-blue-600" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 md:px-16 md:py-8 rounded text-black font-normal items-center justify-center hover:text-blue-600 text-lg font-work-sans`}>
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;