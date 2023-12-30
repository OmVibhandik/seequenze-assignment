import React from 'react'
import {useEffect} from 'react'

function DeleteModel({id,closeModal,HandleDeleteProject}) {

    const HandleDelete= ()=>{
        HandleDeleteProject(id)
    }

    const onSubmitFun = ()=>{
        closeModal()
        HandleDelete()
    }

    useEffect(()=>{
        document.body.style.overflowY = "hidden"
        // return ()=>{}
        console.log(":working")
    },[])

  return (
   <>
        <div className="model-wrapper" onClick={closeModal}></div>
        <div className="model-container">     
            <div class="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-[10px] flex flex-col justify-end items-end">
                    {/* <!-- Modal header --> */}
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Conformation
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
                        Are You to delete your project ?
                    </div>
                    <button onClick={onSubmitFun} className='px-[20px] py-[5px] rounded-md bg-red-400 text-white w-fit'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default DeleteModel