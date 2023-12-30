import './App.css';
import MyProject from './Components/MyProject';
import Navbar from './Components/NavbarComp';
import Sidebar from './Components/SidebarComp';
import {nanoid} from 'nanoid'
import {React, useEffect,useState } from 'react'


function App() {

  const [Projects,setProjects]=useState([
    {
      id:nanoid(),
      title:"Project 1",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my first Project I like to explore more in this sfjkhsdof sajflidsjfiod asjfoijdif ",
    },
    {
      id:nanoid(),
      title:"Project 2",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my second Project I like to explore more in this This is my first Project I like to explore more in this sfjkhsdof sajflidsjfiod asjfoijdif",
    },
    {
      id:nanoid(),
      title:"Project 3",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my third Project I like to explore more in this",
    },
    {
      id:nanoid(),
      title:"Project 4",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my forth Project I like to explore more in this",
    },
    {
      id:nanoid(),
      title:"Project 5",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my fifth Project I like to explore more in this",
    },
    {
      id:nanoid(),
      title:"Project 6",
      src:"https://images.pexels.com/photos/19536435/pexels-photo-19536435/free-photo-of-christmas-tree-and-wreath.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      description:"This is my sixth Project I like to explore more in this",
    }
  ]);

  useEffect(()=>{
    const savedProject=JSON.parse(localStorage.getItem('react-project-app-data'));
    if(savedProject){
      setProjects(savedProject);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-project-app-data',JSON.stringify(Projects))
  },[Projects])

  const addProject=(title,description,src)=>{
    const newProject={
      id:nanoid(),
      title:title,
      src:src,
      description:description,
    }
    const newProjects=[...Projects,newProject];
    setProjects(newProjects);
  }
  const deleteProject=(id)=>{
    const newProjects=Projects.filter((Project)=>Project.id!==id);
    setProjects(newProjects);
  }

  const editProjects=(id,title,description)=>{
    const editProjectObj=Projects.filter((Project)=>Project.id===id);
    const editProject = editProjectObj[0]

    const remainingProjects = Projects.filter((Project)=>Project.id!==id);

    editProject.title = title 
    editProject.description = description

    const newProjects=[...remainingProjects,editProject];

    setProjects(newProjects);
  }

  return (
    // <ProjectProvider value={{project,addProject,updateProject,deleteProject,readProject}}>
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <MyProject Projects={Projects} HandleAddProject={addProject} HandleDeleteProject={deleteProject} HandleEditProject={editProjects}/>
      </div>
  );
}

export default App;
