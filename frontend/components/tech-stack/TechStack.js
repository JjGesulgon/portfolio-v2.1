function TechStack({ techStack }) {
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-40 md:mb-0 lg:mt-40'>
        <div className='col-span-3'>
          <h1 className="text-3xl xl:text-5xl font-work-sans font-light pl-12">Tech Stack</h1>
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='text-center font-work-sans text-base font-light text-justify px-12 xl:px-40' dangerouslySetInnerHTML={{ __html: techStack.body}}></div>
      <br/><br/><br/><br/>
    </div>
  );
}

export default TechStack;