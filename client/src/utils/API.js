import axios from "axios";

const jobAPI = {
  getJobs: function () {
    return axios.get("/api/jobpage/jobpage");
  },
  getJob: function (id) {
    return axios.get("/api/jobpage/" + id);
  },
  deleteJob: function (id) {
    return axios.delete("/api/jobpage/" + id);
  },
};

export default jobAPI;
