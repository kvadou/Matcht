import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
import JobTable from "../../components/JobTable/JobTable";

class Search extends Component {

  state = {
    jobData: [],
    locationSearched: []
  };

  componentDidMount() {
    this.loadJobData();
  }

  loadJobData = () => {
    API.getJobs()
      .then((res) => {
        this.locationSearched = res.data;
        this.setState({ jobData: res.data })
      })
      .catch((err) => console.log(err));
  }

  handleInputLocationChange = event => {
    let newJobs = this.locationSearched.filter((res) => {
      console.log(res.candidate_required_location)
      let searchValue = res.data.candidate_required_location.toLowerCase();
      return searchValue.indexOf(event.target.value) !== -1;
    });
    this.setState({ jobData:newJobs })
  };

  render() {
    return (
      <div class="search">
        <form>
          <label class="jobs">
            <span className="visually-hidden">Search Location</span>
          </label>
          <input className="m-1" type="search" id="header-search" placeholder="Location" name="location" onChange={() => this.handleInputLocationChange.bind(this)}/>
        </form>
        {this.state.jobData.map((res) => (
          <JobTable 
            title={res.data.title}
            job_type={res.data.job_type}
            company_name={res.data.company_name}
            category={res.data.category}
            candidate_required_location={res.data.candidate_required_location}
            url={res.data.url}
            description={res.data.description}
          />
        ))}
      </div>
    );
  }
}

export default Search;
