import React, { Component } from "react";
import TinderCard from "react-tinder-card";
import "./style.css";

class Jobpage extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    fetch("https://random-data-api.com/api/company/random_company?size=10")
      .then((response) => response.json())  
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="job-card">
        <div className="container">
          {this.state.results.map((res) => (
            <TinderCard
              className="swipe"
              key={res.business_name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${res.logo})` }}
                className="card"
              >
                <h3>{res.business_name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Jobpage;
