function AboutMe({ aboutMe }) {
  return (
    <div>
      <div className="flex flex-wrap row-span-1 col-span-3 justify-center mt-24 md:mb-0 lg:mt-20">
        <img src={`${process.env.imageURL}/storage/images/${aboutMe.image}`} className="h-auto xl:w-96 w-80 mt-10 px-2 md:px-0 rounded-lg" alt="book lover "/>
        <div className='text-center font-work-sans text-base font-light text-justify px-12 xl:px-40 mt-10' dangerouslySetInnerHTML={{ __html: aboutMe.body}}></div>
      </div>
    </div>
  );
}

export default AboutMe;