import React, { useState } from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SingleJob(props) {
  const[showAll,setShowAll] = useState(false)
  let description =props.description
  if(!showAll) {
    description = description.substring(0,100) +`...`

  }
  
  if(showAll) {
    console.log(props.description.length)
    description = description.substring(0,props.description.length)

  }

  // console.log(props)

  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{props.type}</div>
        <h3 className="text-xl font-bold">{props.title}</h3>
      </div>
      <div className="mb-5"
  
      style={{WebkitLineClamp:showAll}}
      
      >
        {description}
      </div>
      
      <button className='text-indigo-500 mb-5 hover:text-indigo-600'
          onClick={()=>setShowAll((prev)=>(!prev))}>
            {showAll ? 'Less' : 'More'}
      </button>

      <h3 className="text-indigo-500 mb-2">{props.salary}</h3>
      <div className="border border-gray-100 mb-5"></div>
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <FaMapMarker className='inline text-lg mb-1 mr-1'/>
          {props.location}
          </div>
        <Link to={`/job/${props.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</Link>
      </div>
    </div>
  </div>  )
}

export default SingleJob