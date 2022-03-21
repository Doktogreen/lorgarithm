import React from 'react'
import JobCard from './MovieCard/MovieCard.js'
import {Link} from 'react-router-dom'
const JobList = ({jobsData}) => {
    return (
        <div>
           { jobsData.map((item)=> 
           <Link to={`/${item.name}`} style={{textDecoration:"none"}}>
           <JobCard item= {item } key={item.id}/>
           </Link>
           )}
        </div>
    )
}

export default JobList
