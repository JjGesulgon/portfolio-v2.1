import { useRouter } from 'next/router';
import { Fragment, useState, useEffect } from 'react';

function ProjectDetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  let projectDetails = {};
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

  return <Fragment>
    <div className='grid grid-cols-1 xl:grid-cols-6 overflow-hidden mt-2 md:mb-0 lg:mt-10 relative'>
      <div className='col-span-3'>
        <label className="text-lg xl:text-2xl font-work-sans font-light pl-4 xl:pl-14">{project.industry}</label>
        <br></br>
        <h1 className="text-5xl xl:text-9xl font-work-sans font-thin pl-4 xl:pl-14 pb-4 pt-4">{project.name}</h1>
      </div>
    </div>
    <div>
      <img src={`http://personal-website.test/storage/images/${project.intro_image}`} className='absolute bottom-0 right-0 w-2/4'/>
    </div>
  </Fragment>
}

export default ProjectDetailsPage;