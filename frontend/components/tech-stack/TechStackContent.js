function TechStack({ techStackContent }) {
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-24 md:mb-0 lg:mt-20'>
        <div className='col-span-3'>
          <h1 className="text-3xl xl:text-5xl font-work-sans text-blue-600 font-extralight pl-10 xl:pl-16">Tech Stack</h1>
        </div>
      </div>
      <br/><br/>
      <div className='text-center font-work-sans text-base font-light text-justify px-12 xl:px-40' dangerouslySetInnerHTML={{ __html: techStackContent.body}}></div>
    </div>
  );
}

export default TechStack;