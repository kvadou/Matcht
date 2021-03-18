import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return (
      <div class="search">
        <form action="/jobsearch" method="get">
          <label class="jobs">
            <span className="visually-hidden">Search Location</span>
          </label>
          <input className="m-1" type="text" id="header-search" size="lg" placeholder="Search Jobs" name="jobname" />
          <input className="m-1" type="text" id="header-search" placeholder="Location" name="location" />
          <button className="btn btn-info" type="submit" onClick={this.handleClick}>
            Find Jobs
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
