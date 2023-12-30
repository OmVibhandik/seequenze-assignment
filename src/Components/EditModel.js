import React from 'react'
import { useState,useEffect } from 'react'
import ProjectList from './ProjectList';


function EditModel({Projects,HandleAddProject,closeModal,id,HandleEditProject}) {

    const [projectsTextTitle,setProjectsTextTitle]=useState('');
    const [projectsTextDescrp,setProjectsTextDescrp]=useState('');
    const [projectsSrc, setprojectsSrc] = useState("");

    const handleChangeTitle=(event)=>{
        if(event.target.value.length>0){
            setProjectsTextTitle(event.target.value)
        }
    }
    const handleChangeDescrp=(event)=>{
        if(event.target.value.length>0){
            setProjectsTextDescrp(event.target.value)
        }
    }


    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=1&limit=6", {
        })
        .then((response) => response.json())
        .then((data) => {
            setprojectsSrc(data[0].download_url);
            console.log(data);
        })
        .catch((error) => console.log(error));
    }, [ProjectList]);

    const handleSaveClick=()=>{
        if(projectsTextTitle.trim().length>0 && projectsTextDescrp.trim().length>0){
            HandleEditProject(id,projectsTextTitle,projectsTextDescrp);
            setProjectsTextTitle('')
            setProjectsTextDescrp('')
        }
        else
          alert("project Cannot be empty!!");
    }

    const onSubmitFun = ()=>{
        closeModal();
        handleSaveClick()
    }


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
                            Edit Project
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
                    {/* <!-- Modal body --> */}
                    <form class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChangeTitle} placeholder="Save image as" required="true"/>
                            </div>
                        </div>
                        <div class="col-span-2 mb-3">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChangeDescrp} placeholder="Write project description here" required="true"></textarea>                    
                        </div>
                        <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={onSubmitFun}
                        >
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Edit project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditModel