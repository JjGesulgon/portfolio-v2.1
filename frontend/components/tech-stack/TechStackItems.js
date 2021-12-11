function TechStack({ techStackItems }) {

  const proficiencyCounter = (proficiency) => {
    let starProficiency = [];
    for (let index = 0; index < 5; index++) {
      if (index < proficiency){
        starProficiency[index] = (<img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" key={index} src="/assets/star.png"/>);
      }else{
        starProficiency[index] = (<img className="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" key={index} src="/assets/star.png" style={{ filter: 'grayscale(100%)'}}/>);
      }
    }
    return (
       starProficiency
   );
  }

  const renderTableData = () => {
    return techStackItems.map((techStackItem, index) => {
       const { id, name, experience, proficiency, icon_link } = techStackItem //destructuring
       
       return (
        <tr className="border-b border-gray-200 hover:bg-gray-100" key={index}>
          <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
              <div className="mr-6">
                <img src={icon_link} alt="Logo"/>
              </div>
              <span className="font-medium font-work-sans" width="24" height="24">{name}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center font-medium font-work-sans">
              {experience}
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
              {proficiencyCounter(proficiency)}
            </div>
          </td>
        </tr>
       )
    })
 };

  return (
    <div className="overflow-x-auto mx-10 lg:mx-0 lg:mb-10">
      <div className="min-w-screen flex items-center justify-center font-sans overflow-visible">
        <div className="w-full lg:w-5/6">
          <div className="bg-white lg:shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Frameworks</th>
                  <th className="py-3 px-6 text-left">Experience</th>
                  <th className="py-3 px-6 text-center">Proficiency</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {renderTableData()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;