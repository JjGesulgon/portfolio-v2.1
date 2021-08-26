import { useRouter } from 'next/router';

function ProjectDetailsPage() {
  const router = useRouter();

  const projectID = router.query.projectsId;

  return <h1>Project Details</h1>
}

export default ProjectDetailsPage;