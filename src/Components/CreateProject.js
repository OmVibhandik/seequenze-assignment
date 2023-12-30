import React from 'react'
import MyModel from './MyModel'
import { useState } from 'react'
import create_project from '../assets/create_project.png'


function CreateProject({Projects,HandleAddProject,HandleEditProject}) {

    const [showModel,setShowModel] = useState(false)

    const closeModal = () =>{
        setShowModel(false);
        document.body.style.overflowY = "auto"
    } 

  return (
    <>
        <div className='p-[20px] flex flex-col justify-center items-center bg-white rounded-[20px]'>
            <div onClick={()=> setShowModel(true)} style={{
                backgroundColor: "rgba(250, 120, 47, 0.40)"
            }} className='w-[360px] h-[160px] flex justify-center items-center'>
                <img src={create_project} alt="img"/>
            </div>
                <h2 className='mt-4 text-lg text-center' >Create a New Projects </h2>
                <p className='text-xs text-wrap text-center'> or try a <a className='text-orange-400 hover:cursor-pointer'>Sample Project</a></p>
            {showModel && <MyModel Projects={Projects} HandleAddProject={HandleAddProject} closeModal={closeModal} />}
        </div>
    </>
  )
}

export default CreateProject