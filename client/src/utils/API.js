import axios from "axios";

const jobAPI = {
  getJobs: function () {
    return axios.get("/api/jobpage/jobpage");
  },
  getJob: function (id) {
    return axios.get("/api/jobpage/" + id);
  },
  saveJob: function(jobData) {
    return axios.post("/api/jobpage", jobData);
  },
  deleteJob: function (id) {
    return axios.delete("/api/jobpage/" + id);
  }
};

export default jobAPI;
