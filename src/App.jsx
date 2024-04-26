import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobListing from "./components/JobListing";
import ViewAll from "./components/ViewAll";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import JopDetails  from "./pages/JopDetails";
import AddJobs from "./pages/AddJobs";
import NotFound from "./pages/NotFound";
import EditJob from './pages/EditJob'



const App = () => {
  const addJob = async (newJob) =>{
    const data = await fetch('http://localhost:8000/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    })
    return;
  }

  const deleteJob = async (id) =>{
    const data = await fetch(`http://localhost:8000/jobs/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
    })
    return;
  }

  const editJob = async (newJob,id) =>{
    const data = await fetch(`http://localhost:8000/jobs/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob)
    })
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/jobs" element={<JobsPage/>}/>
      <Route path="/job/:id" element={<JopDetails deleteJob={deleteJob}/>}/>
      <Route path="/job-edit/:id" element={<EditJob editJob={editJob}/>}/>

      <Route path="/add-job" element={<AddJobs addJobSubmit={addJob}/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>)
  
  );
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
