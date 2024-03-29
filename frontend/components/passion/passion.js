function passion({ passions }) {

  const renderTableData = () => {
    return passions.map((passion, index) => {
      const { id, name, image, description } = passion //destructuring

      return (
        <div className="my-1 w-full md:w-1/3" key={index}>
          <article className="overflow-hidden rounded-lg mb-8">
            <img alt="Placeholder" className="block h-auto w-auto mx-auto" src={`${process.env.imageURL}/storage/images/${image}`} />
            <div className="flex justify-center items-center p-2 md:px-4 md:pt-4">
                <label className="no-underline text-2xl font-light font-work-sans">{name}</label>
            </div>
            <div className="text-base font-light font-work-sans text-justify mx-8" dangerouslySetInnerHTML={{ __html: description}}></div>
          </article>
        </div>
      )
    })
  };

  return (
    <div>
      <br /><br />
      <div className="container mx-auto px-4 md:px-12 mt-40 md:mb-0 lg:mt-40">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {renderTableData()}
        </div>
      </div>
    </div>
  );
}

export default passion;