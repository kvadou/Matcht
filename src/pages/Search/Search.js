import React, { Component } from 'react';


class Search extends Component {
    handleClick() {
      console.log('Click happened');
    }
    render() {
      return  <form action="/jobsearch" method="get">
      <label>
          <span className="visually-hidden">Search Jobs</span>
      </label>
      <input className="m-1"
          type="text"
          id="header-search"
          placeholder="Search Jobs"
          name="jobname" 
      />
       <input className="m-1"
          type="text"
          id="header-search"
          placeholder="Location"
          name="location" 
      />
      <button className="btn btn-primary"type="submit" onClick={this.handleClick}>Find Jobs</button>
  </form>
    }
  }

export default Search;