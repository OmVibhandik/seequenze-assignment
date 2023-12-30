import React from 'react'
import CreateProject from './CreateProject'
import ProjectList from './ProjectList'

function MyProject({Projects,HandleAddProject,HandleDeleteProject, HandleEditProject}) {

    

  return (
    <>
        <div className="grid grid-cols-1 gap-4 max-w-full h-min mt-20 ml-[288px] md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7">
            <h1 className='text-4xl font-semibold w-full h-min ml-4 mt-4' >My Projects</h1>
            <div className='w-fit'>
            <CreateProject Projects={Projects} HandleAddProject={HandleAddProject} HandleEditProject={HandleEditProject}/>
            </div>
        </div>
        <ProjectList Projects={Projects} HandleDeleteProject={HandleDeleteProject} HandleEditProject={HandleEditProject} HandleAddProject={HandleAddProject} />
    </>
  )
}

export default MyProject