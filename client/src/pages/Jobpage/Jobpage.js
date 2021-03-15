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
      <div className="container">
        <div className="job-card">
          {this.state.results.map((job) => (
            <SwipeCard >
              
            </SwipeCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobpage;
