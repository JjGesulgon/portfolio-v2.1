import Link from 'next/link';
import { Fragment } from 'react';

function ProjectsPage() {
  return <Fragment>
    <h1>Projects</h1>
    <ul>
      <li>
        <Link href="/projects/1">
          Blog 1
        </Link>
      </li>
      <li>
        <Link href="/projects/2">
          Blog 2
        </Link>
      </li>
    </ul>
  </Fragment>
}

export default ProjectsPage;