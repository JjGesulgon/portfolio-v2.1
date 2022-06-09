import Link from 'next/link';
import { Fragment, useState, useEffect } from 'react';

let currentPage = 1;
let totalPages = 1;
let searchName = "";

export default function ProjectsPage() {

  const [projects, setProjects] = useState([]);
  // let [totalPages, setTotalPages] = useState([]);

  const onKeyUp = event => {
    if (event.charCode === 13) {
      searchName = event.target.value;
      fetchProjects(1, event.target.value);
      currentPage = 1;
    }
  }

  const fetchProjects = async (page, searchField) => {
    const projectQuery = fetch(`${process.env.baseURL}/api/projects?page=${page}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "search": searchField
      })
    });

    const response = await Promise.all([(await projectQuery).json()])
    setProjects(response[0].data);
    // setTotalPages(response[0].pages);
    totalPages = response[0].pages;
  };

  useEffect(() => {
    fetchProjects(currentPage, "");
  }, []);

  const isDisplay = (type) => {
    if(type === "next" && projects.length < 6){
      return false;
    }

    if(type === "prev" && currentPage === 1){
      return false;
    }

    return true;
  };  

  const renderProjectsData = () => {
    let proj = projects
    return proj.map((project, index) => {
      const {name, type, intro_image, slug} = project;
      
      return (
        <Link href={`/projects/${slug}`} key={index}>
          {/* For original tile size lg:w-1/3 */}
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4" key={index}>
            <article className="overflow-hidden rounded-lg hover:bg-blue-500 hover:text-white transition duration-500 mb-8">
              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={`${process.env.imageURL}/storage/images/${intro_image}`}/>
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-2xl font-light font-work-sans" href="#">
                        {name}
                    </a>
                </h1>
                <p className="text-base font-light font-work-sans">
                    {type}
                </p>
              </header>
            </article>
          </div>
        </Link>
      );
    });
  };

  function prev() {
    currentPage--;
    if(currentPage < 1){
      currentPage++;
      return;
    }
    fetchProjects(currentPage, searchName);
    window.scrollTo(0, 0);
  }

  function next() {
    currentPage++;
    if(currentPage > totalPages){
      currentPage--;
      return;
    }
    fetchProjects(currentPage, searchName);
    window.scrollTo(0, 0);
  }
  
  return <Fragment>
    <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-2 md:mb-0 lg:mt-10'>
      <div className='col-span-3'>
        <h1 className="text-3xl xl:text-5xl font-work-sans font-light pl-4 xl:pl-14 pb-4">Projects</h1>
      </div>
    </div>
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <input className="appearance-none border rounded w-full py-2 px-3 border-blue-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10 mb-10" id="search" name="search" type="text" placeholder="Search Project" onKeyPress={onKeyUp}/>
        {renderProjectsData()}
      </div>
      <div className="flex justify-end">
        <button className="bg-transparent mx-2 p-4 text-black font-light font-work-sans border border-2 border-blue-300 hover:bg-blue-500 hover:text-white transition duration-500  rounded-lg focus:outline-none" name="prev" id="prev" style={ isDisplay("prev") ? { display:'inline-block'} : {display : 'none'} }   onClick={prev}>
          {/* <img src="https://img.icons8.com/office/50/000000/squiggly-arrow.png" style={{transform: `scaleX(-1)`, WebkitTransform: 'scaleX(-1)'}} /> */}
          Prev
        </button>

        <button className="bg-transparent mx-2 p-4 text-black font-light font-work-sans border border-2 border-blue-300 hover:bg-blue-500 hover:text-white transition duration-500  rounded-lg focus:outline-none" name="next" id="next" style={ isDisplay("next") ? { display:'inline-block'} : {display : 'none'} } onClick={next}>
          {/* <img src="https://img.icons8.com/office/50/000000/squiggly-arrow.png"/> */}
          Next
        </button>
      </div>
    </div>
  </Fragment>
}