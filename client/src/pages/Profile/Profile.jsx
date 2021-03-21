import React, { useState, useEffect, useContext } from "react";
//import { Link, useParams } from "react-router-dom";
import profile from "../../profile.json";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import Table from "react-bootstrap/Table";
import "./Profile.css";
import { AuthContext } from "../../Auth";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  const [jobsDb, setJobsDb] = useState([]);
  const { currentUser } = useContext(AuthContext);
  // When user data base is set up
  //const [userDb, setUserDb] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  function loadJobs() {
    API.getJobs()
      .then((res) => setJobsDb(res.data))
      .catch((err) => console.log(err));
  }

  function deleteJob(id) {
    API.deleteJob(id)
      .then((res) => loadJobs())
      .catch((err) => console.log(err));
  }

  return (
    <>
    {
      jobsDb.length === 0 ? "" :
    <div>
      <div className="container">
        <div className="row table-body">
          <div className="header col-sm-6 offset-sm-2">
            <h1>
              Welcome Back, <br />
              {currentUser.email}
            </h1>
          </div>
          <div className="photo col-sm-4">
            <img src={profile[0].profilePic} alt="profilephoto" width="150" height="150" />
          </div>
        </div>
        <div className="row">
          <br /> <hr />
        </div>
        <div className="row">
          <div className="offset-sm-2 col-sm-8 offset-sm-2">
            <h1> Saved Jobs </h1>
            <Table striped bordered hover size="lg">
              <thead className="table header">
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Job Type</th>
                  <th>Location</th>
                  <th>Link</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="table body">
                {jobsDb.map((job) => (
                  <tr key={job.id}>
                    <th>{job.title}</th>
                    <th>{job.company_name}</th>
                    <th>{job.job_type}</th>
                    <th>{job.candidate_required_location}</th>
                    <th>
                    <a href={job.url}>
                        <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                      </a>                    </th>
                    <DeleteBtn onClick={() => deleteJob(job._id)} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Profile;
