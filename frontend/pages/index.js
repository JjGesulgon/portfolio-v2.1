import Image from 'next/image';
import { useRouter } from "next/router";
import AboutMe from '../components/about-me/AboutMe';

export default function HomePage() {
  const router = useRouter()

  return (
    <div>
      <div className="grid grid-flow-col md:gap-4 lg:gap-2 md:ml-8 -mt-10 overflow-hidden">
        <div className="flex flex-col-reverse flex-wrap row-span-1 lg:mt-20">
          <div className="pl-8 md:pl-auto lg:mt-48 mt-20 pr:5 lg:pr-20 font-work-sans font-light text-gray-700 slide-to-right">
            <div className="text-6xl lg:text-8xl">
              JJ GESULGON
            </div>
            <div className="text-4xl">
              Software Developer
            </div>
            <div>
              <button className="bg-transparent 
                            hover:bg-blue-500 
                            text-blue-700 
                            font-semibold 
                            hover:text-white 
                            mt-2
                            py-2 
                            px-4 
                            border 
                            border-blue-500 
                            hover:border-transparent 
                            rounded 
                            focus:outline-none"
                            onClick={() => router.push('/contact-me')}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="invisible xl:visible lg:row-span-3">
          <img src="/assets/undraw_Lost_online.svg" className=" h-auto w-full pl-3 slide-to-left" alt="book lover "/>
        </div>
      </div>
      <br></br>
      <br></br>
      <AboutMe/>
    </div>
  );
}
