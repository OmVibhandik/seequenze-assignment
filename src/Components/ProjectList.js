import React from 'react'
import ImageCard from './ImageCard'

function ProjectList({Projects,HandleDeleteProject,HandleEditProject,HandleAddProject}) {


  return (
    <div className="grid grid-cols-3 gap-3 ml-[288px] m-2 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7">
            {Projects.map(
                (project)=> (<ImageCard Projects={Projects} id={project.id} title={project.title} src={project.src} description={project.description}  HandleDeleteProject={HandleDeleteProject} HandleEditProject={HandleEditProject} HandleAddProject={HandleAddProject} />)
            )}
            {/* <AddNote HandleAddProject={HandleAddProject}/> */}
    </div>  
  )
}

export default ProjectList