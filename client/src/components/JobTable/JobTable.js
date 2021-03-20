import React from "react";

// Component for display needed employees data in table.
function JobTable(props) {
  return (
    <div className="row">
      <div className="offset-3 col-6 offset-3">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h4 className="display-3"> {props.title} </h4>
            <h6>Type: {props.job_type}</h6>
            <h6>Company: {props.company_name}</h6>
            <h6>Category: {props.category}</h6>
            <h6> Required Location: {props.candidate_required_location}</h6>
            <h6>
              {" "}
              <a href={props.url}> Link to Posting </a>{" "}
            </h6>
            <hr className="my-4" />
            <p>{props.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobTable;
