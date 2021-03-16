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
  }

  render() {
    return (
      <div className="container">
        <div className="job-card">
          {this.state.results.map((job) => (
            <SwipeCard 
              className="swipe" 
              key={job.business_name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${job.logo})` }}
                className="card"
              >
                <h3>{job.business_name}</h3>
              </div>
            </SwipeCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobpage;
