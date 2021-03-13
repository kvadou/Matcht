import React, { Component } from "react";
import "./style.css";
import JobFrame from "./JobFrame";

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
        <JobFrame />
        <ul className="list-group">
            {this.state.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    {result.business_name}
                </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Jobpage;
