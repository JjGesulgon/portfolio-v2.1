import Image from 'next/image';
import { useRouter } from "next/router";
import AboutMe from '../components/about-me/AboutMe';
import TechStack from '../components/tech-stack/TechStack';

export default function HomePage({data}) {
  const aboutMe = data[0][0];
  const techStackContent = data[1][0];

  const router = useRouter();

  return (
    <div>
      <div className="grid grid-flow-col md:gap-4 lg:gap-2 md:ml-8 -mt-10 overflow-hidden mb-96 md:mb-0 xl:mb-0">
        <div className="flex flex-col-reverse flex-wrap row-span-1 xl:mt-20">
          <div className="pl-8 md:pl-auto lg:mt-48 mt-20 pr:5 lg:pr-20 font-work-sans font-light text-gray-700 slide-to-right">
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
          <img src="/assets/undraw_Lost_online.svg" className=" h-auto w-full pl-3 slide-to-left" alt="book lover "/>
        </div>
      </div>
      <br></br>
      <br></br>
      <AboutMe aboutMe={aboutMe}/>
      <br></br>
      <br></br>
      <TechStack techStack={techStackContent}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const aboutMeQuery = fetch(`http://localhost:8080/api/about-me`);
  const techStackContentQuery = fetch(`http://localhost:8080/api/tech-stack-content`);

  const responses = await Promise.all([(await aboutMeQuery).json(), (await techStackContentQuery).json()])

  return {
    props: {
      data: responses
    },
    revalidate: 1,
  };
};