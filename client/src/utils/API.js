import axios from "axios";

const jobAPI = {
    getJobs: function() {
        return axios.get("/api/jobs");
    },
    getJob: function(id) {
         return axios.get("/api/jobs/" + id);
    },
    deleteJob: function(id) {
        return axios.delete("/api/jobs/" + id);
    }
};

export default jobAPI;