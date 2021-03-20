import React from "react";

// Component for display needed employees data in table.
function JobTable(props) {
  return (
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Type</th>
          <th scope="col">Company</th>
          <th scope="col">Category</th>
          <th scope="col">Required Location</th>
          <th scope="col">Url</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.title}</td>
          <td>{props.job_type}</td>
          <td>{props.company_name}</td>
          <td>{props.category}</td>
          <td>{props.candidate_required_location}</td>
          <td>{props.url}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default JobTable;
