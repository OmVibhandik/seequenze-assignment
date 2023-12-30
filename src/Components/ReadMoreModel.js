import React from 'react'
import {useEffect} from 'react'

function ReadMoreModel({id,title,closeModal,Projects}) {

    const ProjectObj=Projects.filter((Project)=>Project.id===id);
    const Project = ProjectObj[0]
    const projectsDescription = Project.description

    // console.log(projectsDescription)
    useEffect(()=>{
        document.body.style.overflowY = "hidden"
        return ()=>{}
    },[])

  return (
    <>
        <div className="model-wrapper" onClick={closeModal}></div>
        <div className="model-container">     
            <div class="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent lm-10 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal"
                                onClick={closeModal} 
                        >
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className='overflow-y-auto max m-2 text-white  '>
                            {projectsDescription}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReadMoreModel