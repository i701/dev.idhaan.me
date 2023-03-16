import Head from "next/head"
import ProjectCard from "./components/ProjectCard"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className={`space-y-4`}>
        {" "}
        <h1 className="text-4xl font-bold">
          <span className="accent-line text-orange-600 dark:text-orange-500">
            Projects
          </span>
        </h1>
        <p>Projects that i have successfully finished and deployed.</p>
        <div className="grid md:grid-cols-2">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects
