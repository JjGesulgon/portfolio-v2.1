import Image from 'next/image';
import { useRouter } from "next/router";
import AboutMe from '../components/about-me/AboutMe';
import TechStackContent from '../components/tech-stack/TechStackContent';
import TechStackItems from '../components/tech-stack/TechStackItems';
import Passions from '../components/passion/passion';
// import styled from 'styled-components'

export default function HomePage({data}) {

  const aboutMe = data[0][0];
  const techStackContent = data[1][0];
  const techStackItems = data[2];
  const passions = data[3];

  const router = useRouter();

  // Define static classes
  const stylesIndex = {
    listLeft: ['pl-8 md:pl-auto lg:mt-48 mt-20 pr:5 lg:pr-20 font-work-sans font-light text-gray-700'],
    listRight: 'h-auto w-full pl-3 mt-16'
  }

  // Issue: "window is not defined" error
  // Solution: Replicate rendering phase to use session
  let hasAnimated = true;
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem('animate', false);
    hasAnimated = window.sessionStorage.getItem('animate')
  }

  return (
    <div>
      <div className="opacity-100 grid grid-flow-col md:gap-4 lg:gap-2 md:ml-8 -mt-10 overflow-hidden mb-96 md:mb-0 xl:mb-12 2xl:mb-0">
        <div className="flex flex-col-reverse flex-wrap row-span-1 xl:mt-20">
          <div className={`${stylesIndex.listLeft} ${hasAnimated === true ? 'slide-to-right' : ''}`}>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              JJ GESULGON
            </div>
            <div className="text-xl md:text-3xl lg:text-4xl">
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
          <img src="/assets/undraw_Lost_online.svg" alt="book lover" className={`${stylesIndex.listRight} ${hasAnimated === true ? 'slide-to-left' : ''}`}/>
        </div>
      </div>
      <br></br>
      <br></br>
      <AboutMe aboutMe={aboutMe}/>
      <br></br>
      <br></br>
      <Passions passions={passions}/>
      <br></br>
      <br></br>
      <TechStackContent techStackContent={techStackContent}/>
      <br></br>
      <br></br>
      <TechStackItems techStackItems={techStackItems}/>
      <br></br>
      <br></br>
    </div>
  );
};

export const getStaticProps = async () => {
  const aboutMeQuery = fetch(`${process.env.baseURL}/api/about-me`);
  const techStackContentQuery = fetch(`${process.env.baseURL}/api/tech-stack-content`);

  const techStackQuery = fetch(`${process.env.baseURL}/api/tech-stack-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "search": ""
    })
  });
  
  const passionQuery = fetch(`${process.env.baseURL}/api/passions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "search": ""
    })
  });

  const responses = await Promise.all([(await aboutMeQuery).json(), (await techStackContentQuery).json(), (await techStackQuery).json(), (await passionQuery).json()])

  return {
    props: {
      data: responses
    },
    revalidate: 1,
  };
};