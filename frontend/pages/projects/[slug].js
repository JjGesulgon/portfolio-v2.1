import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';
import  React from 'react';

function ProjectDetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  let projectDetails = {};
  let samplePageImagesCompilation = [];
  const [project, setProject] = useState([]);
  
  const fetchProjects = async (slug) => {
    const projectQuery = fetch(`${process.env.baseURL}/api/projects/get-by-id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "slug": slug
      })
    });

    projectDetails = await Promise.all([(await projectQuery).json()])
    setProject(projectDetails[0]);
  };

  useEffect(() => {
    if(!router.isReady) return;
    fetchProjects(slug);
  }, [router.isReady]);

  const renderTechUsed = () => {
      let techStackItems = project.techStackItems
      if(techStackItems){
        return techStackItems.map((stack, index) => {
          const {name, proficiency} = stack;
          
          return (
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-2 my-10 rounded-lg" key={name}>
              {name}
            </button>
          );
        });
      }
  };

  const compileSampleImages = (imageArray = []) => {
    if (imageArray !== []){
      imageArray.forEach((el) => {
        let imageUri = `${process.env.imageURL}/storage/images/${el.image}`;
        samplePageImagesCompilation.push(imageUri);
      })
    }
    return samplePageImagesCompilation;
  }

  const Carousel = () => {
    let images = compileSampleImages(project.samplePageImages);
    const [currentImage, setCurrentImage] = useState(0);
    
    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  
    const scrollToImage = (i) => {
      setCurrentImage(i);
      refs[i].current.scrollIntoView({
        //      Defines the transition animation.
        behavior: "smooth",
        //      Defines vertical alignment.
        block: "nearest",
        //      Defines horizontal alignment.
        inline: "start",
      });
    };
  
    const totalImages = images.length;
  
    const nextImage = () => {
      if (currentImage >= totalImages - 1) {
        scrollToImage(0);
      } else {
        scrollToImage(currentImage + 1);
      }
    };
  
    const previousImage = () => {
      if (currentImage === 0) {
        scrollToImage(totalImages - 1);
      } else {
        scrollToImage(currentImage - 1);
      }
    };
  
    const arrowStyle = "absolute bg-blue-500 hover:bg-blue-700 text-white -mt-10 w-20 rounded-md flex items-center justify-center";
  
    const sliderControl = (isLeft) => (
      <button
        type="button"
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
        // style={{ top: "40%" }}
      >
        <span role="img" aria-label={`${isLeft ? "left" : "right"}`} className="text-xl font-work-sans font-base">
          {isLeft ? "<" : ">"}
        </span>
      </button>
    );
  
    return (
      <div className="py-12 mx-auto flex w-screen md:w-2/3">
        <div className="relative w-full">
          <div className="carousel">
            {sliderControl(true)}
            {images.map((img, i) => (
              <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                <img src={img} className="w-full object-contain" />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    );
  };

  return <Fragment>
    <div className='xl:mb-52'>
      <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-2 md:mb-0 lg:mt-10 relative'>
        <div className='col-span-3'>
          <label className="text-lg md:text-2xl xl:text-2xl font-work-sans font-light pl-4 md:pl-8 xl:pl-14">{project.industry}</label>
          <br></br>
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-work-sans font-thin pl-4 xl:pl-14 md:pl-8 pb-4 pt-4 text-blue-500">
            {project.name}
          </h1>
          <div className='text-left font-work-sans xl:text-lg md:text-lg font-light text-justify px-12 md:px-20 2xl:px-40 xl:mb-20 mt-12' dangerouslySetInnerHTML={{ __html: project.overview}}></div>
        </div>
      </div>

      <div className='md:mx-16 xl:mx-0 mx-8 mt-8 2xl:mt-0'>
       <img src={`${process.env.imageURL}/storage/images/${project.intro_image}`} className='xl:absolute xl:bottom-0 xl:right-0 xl:w-2/4 md:w-auto'/>
      </div>
    </div>

    {/* lg:mt-2 xl:mt-8 */}
    <div className='place-content-center mx-20'>
      <div className='grid grid-cols-1 xl:grid-cols-6 projectDetails'>
        <div className='col-span-3 mt-24 md:mb-24 xl:mb-0'>
          <div className='xl:px-20 pt-8 xl:pt-0 md:mx-16 xl:mx-0 mx-8'>
            <img src={`${process.env.imageURL}/storage/images/${project.screen_image}`} className=''/>
          </div>
        </div>
        <div className='col-span-3 mt-2 md:mb-24 xl:mb-0'>
          <label className="text-3xl md:text-4xl xl:text-5xl font-work-sans text-blue-600 font-extralight xl:pl-14 pl-4 md:pl-8">Concept</label>
          <div className='text-left font-work-sans xl:text-lg md:text-lg font-light text-justify xl:px-8 xl:py-12 mx-8 mt-4 md:px-12' dangerouslySetInnerHTML={{ __html: project.concept_description}}></div>
        </div>
      </div>
      
      
      <div className='grid grid-cols-1 xl:grid-cols-6 lg:mt-4 xl:mt-44'>
        <div className='col-span-3 mt-2 md:mb-24 xl:mb-0'>
          <label className="text-3xl md:text-4xl xl:text-5xl font-work-sans text-blue-600 font-extralight pl-24">Development</label>
          <div className='text-left font-work-sans xl:text-lg md:text-lg font-light text-justify xl:pl-24 xl:pt-12 xl:pb-8 mx-8 mt-4 mb-10 xl:mb-0 xl:mx-0 xl:mt=0 md:px-12' dangerouslySetInnerHTML={{ __html: project.development_description}}></div>
        </div>

        <div className='col-span-3 mt-2 md:mb-24 xl:mb-0'>
          <div className='pl-4 xl:pl-4 md:pl-8'>
            <label className="text-3xl md:text-4xl xl:text-5xl font-work-sans font-extralight text-blue-600 xl:pl-14 pl-4 md:pl-8" >Frameworks Used</label>
            <div className='xl:px-12 md:px-16'>
              {renderTechUsed()}
            </div>
          </div>

          <div className='pl-4 xl:pl-4 md:pl-8'>
            <label className="text-3xl md:text-4xl xl:text-5xl font-work-sans font-extralight text-blue-600 xl:pl-14 pl-8 md:pl-8" >Project Details</label>
            <br></br>
            <br></br>
            <div className='md:pl-12 xl:pl-0'>
              <label className="text-lg xl:text-lg font-work-sans xl:pl-16 pl-8">Live Link: &nbsp;
                <span> 
                  <label className='text-lg xl:text-lg font-work-sans font-light'>
                    {project.live ? <a href={project.live} target="_blank" className='hover:text-blue-500 text-lg xl:text-lg font-work-sans font-light cursor-pointer'>Click Here!</a> : project.reason_if_unavailable}
                  </label>
                </span>
              </label>
            </div>

            <div className='md:pl-12 xl:pl-0'>
              <label className="text-lg xl:text-lg font-work-sans xl:pl-16 pl-8">GitHub Repository: &nbsp;
                <span> 
                  <a href={project.github_repository} target="_blank">
                    <label className='hover:text-blue-500 text-lg xl:text-lg font-work-sans font-light cursor-pointer'>
                      Click Here!
                    </label>
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div className='lg:mt-2 xl:mt-36 md:mx-auto'>
      <div className='xl:text-center'>
        <label className="text-3xl md:text-4xl xl:text-5xl pl-4 md:pl-8 font-work-sans font-extralight text-blue-600">Screenshots</label>
        <div>
          {Carousel()}
        </div>
      </div>
    </div>
  </Fragment>
}

export default ProjectDetailsPage;