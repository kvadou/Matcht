import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
import JobTable from "../../components/JobTable/JobTable";

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
    this.setState({ jobData:newJobs });
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
        <div>
          {this.state.jobData.map((res) => (
            <JobTable
              title={res.title}
              job_type={res.job_type}
              company_name={res.company_name}
              category={res.category}
              candidate_required_location={res.candidate_required_location}
              url={res.url}
              description={res.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
