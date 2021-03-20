import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
//import JobTable from "../../components/JobTable/JobTable";
import SwipeCard from "react-tinder-card";

class Search extends Component {
  state = {
    jobData: [],
    locationSearched: [],
  };

  componentDidMount() {
    this.loadJobData();
  }

  loadJobData = () => {
    API.getJobs()
      .then((res) => {
        this.locationSearched = res.data;
        this.setState({ jobData: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleInputLocationChange = (event) => {
    let newJobs = this.locationSearched.filter((res) => {
      console.log(res.candidate_required_location);
      let searchValue = res.candidate_required_location.toLowerCase();
      return searchValue.indexOf(event.target.value) !== -1;
    });
    this.setState({ jobData: newJobs });
  };

  render() {
    return (
      <div class="search">
        <form>
          <label class="jobs">
            <span className="visually-hidden">Search Location</span>
          </label>
          <input
            className="m-1"
            type="search"
            id="header-search"
            placeholder="Location"
            name="location"
            onChange={this.handleInputLocationChange.bind(this)}
          />
        </form>
        <div className="container">
          <div className="job-card">
            {this.state.jobData.map((res) => (
              <SwipeCard
                className="swipe"
                key={res._id}
                preventSwipe={["up", "down"]}
              >
                <div className="row">
                  <div className="offset-3 col-6 offset-3">
                    <div className="jumbotron jumbotron-fluid">
                      <div className="container">
                        <h4 className="display-3"> {res.title} </h4>
                        <h6>Type: {res.job_type}</h6>
                        <h6>Company: {res.company_name}</h6>
                        <h6>Category: {res.category}</h6>
                        <h6>
                          {" "}
                          Required Location: {res.candidate_required_location}
                        </h6>
                        <h6>
                          {" "}
                          <a href={res.url}> Link to Posting </a>{" "}
                        </h6>
                        <hr className="my-4" />
                        <p>{res.description} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwipeCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
