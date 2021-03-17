import React, { useState, useEffect } from "react";
import SwipeCard from "react-tinder-card";
import "./style.css";
import jobdata from "../../utils/jobdata.json";
import SwipeButtons from "../../components/SwipeButton/swipeButtons";
import API from "../../utils/API";

function Jobpage() {

  const [jobsDb, setJobsDb] = useState([]);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  function loadJobs() {
    API.getJobs()
      .then(res => setJobsDb(res.data))
      .catch(err => console.log(err))
  }

  
  

 
    return (
      <div className="container">
        <div className="job-card">
          {this.state.jobdata.map((job) => (
            <SwipeCard 
              className="swipe" 
              key={job.title}
              preventSwipe={["up", "down"]}
            >
             <div className="row">
                    <div className="offset-3 col-6 offset-3">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h4 className ="display-3"> {job.title} </h4>
                                <h6>Type: {job.job_type}</h6> 
                                <h6>Company: {job.company_name}</h6>
                                <h6> Category: {job.category}</h6>
                                <h6> Required Location: {job.candidate_required_location}</h6>
                                <h6> <a href={job.url}> Link to Posting </a> </h6>
                                <hr className="my-4" />
                                <p>{job.description} </p>
                            </div>
                        </div>

                    </div>
                </div>
            </SwipeCard>
          ))}
        </div>
      </div>
    );
  }


export default Jobpage;
