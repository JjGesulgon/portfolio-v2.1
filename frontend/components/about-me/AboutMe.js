function AboutMe({ aboutMe }) {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-40 md:mb-0 lg:mt-40'>
      <div className='col-span-3 xl:bg-blue-400 xl:text-white xl:rounded-r-full'>
        <h1 className="text-3xl xl:text-5xl font-work-sans font-light pl-12 xl:pl-16 xl:pt-10">About Me</h1>
      </div>
      <div className="flex flex-wrap row-span-1 col-span-3 justify-center mt-10 xl:mt-0">
        <div className='text-center font-work-sans text-base font-light text-justify px-12 xl:px-40' dangerouslySetInnerHTML={{ __html: aboutMe.body}}></div>
        <img src={`http://personal-website.test/storage/images/${aboutMe.image}`} className="h-auto w-96 mt-10 px-2 md:px-0 rounded-lg" alt="book lover "/>
      </div>
    </div>
  );
}

export default AboutMe;