import React, { Component } from "react";
import SwipeCard from "react-tinder-card";
import "./style.css";

class Jobpage extends Component {

  state = {
    results: [],
  };

  componentDidMount() {
    fetch("https://random-data-api.com/api/company/random_company?size=10")
      .then((response) => response.json())  
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.results.map((res) => (
          <JobFrame image={res.logo}/>
        ))}
      </div>
    );
  }
}

export default Jobpage;
