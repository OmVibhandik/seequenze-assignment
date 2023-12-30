import React  from 'react'
import MyModel from './MyModel'
import { useState } from 'react'
import EditModel from './EditModel'
import ReadMoreModel from './ReadMoreModel'
import DeleteModel from './DeleteModel'


function ImageCard({Projects,HandleAddProject,id,title,src,description,HandleDeleteProject,HandleEditProject}) {

    const [showModel,setShowModel] = useState(false)

    const [readMoreModel,setReadMoreModel] = useState(false)

    const [deleteModel,setDeleteModel] = useState(false)

    const closeModal = () =>{
        setShowModel(false);
        setReadMoreModel(false);
        setDeleteModel(false);
        document.body.style.overflowY = "auto"
    } 

    const HandleEdit= ()=>{
        setShowModel(true)
    }

    const HandleReadMore = ()=>{
        setReadMoreModel(true)
        document.body.style.overflowY = "auto"
    }

    const HandleDelete = ()=>{
        setDeleteModel(true)
        // console.log("working")
        document.body.style.overflowY = "auto"
    }

  return (
    <div class="max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={src} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{description}</p>
            <a href="#" class="inline-flex items-center mr-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={HandleReadMore}
            >
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex items-center mr-5 px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={HandleEdit}
            >
                Edit
                <svg class="h-5 w-5 ml-1 text-white"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
            </a>
            <a href="#" onClick={HandleDelete} class=" inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                Delete
                <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </a>
        </div>
        {showModel && <EditModel id={id} HandleEditProject={HandleEditProject} Projects={Projects} HandleAddProject={HandleAddProject} closeModal={closeModal} />}
        {readMoreModel && <ReadMoreModel id={id} title={title} Projects={Projects} closeModal={closeModal} />}
        {deleteModel && <DeleteModel id={id} closeModal={closeModal} HandleDeleteProject={HandleDeleteProject}/>}
         {/* {deleteModel && <ReadMoreModel id={id} title={title} Projects={Projects} closeModal={closeModal} />} */}
    </div>
  )
}

export default ImageCard