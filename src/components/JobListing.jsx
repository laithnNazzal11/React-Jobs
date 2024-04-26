import React from 'react'
import SingleJob from './SingleJob'
import jobs from '../jobs.json'
import { useState,useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function JobListing({isHome = false}) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [color, setColor] = useState("#ffffff");

    const [jobsApi,setJobsApi] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
      const fetchJobs = async () => {
        try{
          const response = await fetch(`http://localhost:8000/jobs`)
          const data = await response.json()
          setJobsApi(data)
          // console.log(response)
        }

        catch(error){
          console.log(`Error fetching data ${error}`)

        }
        finally {
          setLoading(false)
        }
      }
      fetchJobs()
    },[])

    // console.log(jobsApi)

    const JobListing = isHome ? jobsApi.slice(0,3) : jobsApi
  return (

    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h2>
        {loading ? (     
           <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />) :    
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {
         JobListing.map((item)=>(
            <SingleJob 
            key={item.id}
            type={item.type}
            title={item.title}
            description={item.description}
            salary={item.salary}
            location={item.location}
            id={item.id}
            />
        ))
        
      }
      </div>
      }
    </div>
  </section>  )
}

export default JobListing