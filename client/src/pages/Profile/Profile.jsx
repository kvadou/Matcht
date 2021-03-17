import React, { Component } from "react";
//import { Link, useParams } from "react-router-dom";
import profile from "../../profile.json";
//import API from "../../utils/API";

class Profile extends Component {

  state = {
    profile,
  };

  //function Profile() {

  //const [jobData, setJobData] = useState({});

  // const {id} = useParams()
  // useEffect(() => {
  //   API.getJob(id)
  //     .then(res => setJobData(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-2">
              <h1>
                Welcome Back, <br />
                {profile[0].firstName} {profile[0].lastName}{" "}
              </h1>
            </div>
            <div className="col-sm-4">
              <img
                src={profile[0].profilePic}
                alt="profilephoto"
                width="150"
                height="150"
              />
            </div>
          </div>
          <div className="row">
            <br /> <hr />
          </div>
          <div className="row">
            <div className="offset-sm-2 col-sm-8 offset-sm-2">
              <h1> Saved Jobs </h1>
              {/* <p>{jobData.company_name}</p> */}
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Location</th>
                    <th scope="col">Apply</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{profile[0].savedJobs[0].jobName}</td>
                    <td>{profile[0].savedJobs[0].jobTitle}</td>
                    <td>{profile[0].savedJobs[0].location}</td>
                    <td>
                      <a href={profile[0].savedJobs[0].link}>
                        {" "}
                        Link to Website{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>{profile[0].savedJobs[1].jobName}</td>
                    <td>{profile[0].savedJobs[1].jobTitle}</td>
                    <td>{profile[0].savedJobs[1].location}</td>
                    <td>
                      <a href={profile[0].savedJobs[1].link}>
                        {" "}
                        Link to Website
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>{profile[0].savedJobs[2].jobName}</td>
                    <td>{profile[0].savedJobs[2].jobTitle}</td>
                    <td>{profile[0].savedJobs[2].location}</td>
                    <td>
                      <a href={profile[0].savedJobs[2].link}>
                        {" "}
                        Link to Website
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
