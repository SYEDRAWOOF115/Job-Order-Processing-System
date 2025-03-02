import axios from "axios";

const API_URL = "https://your-backend-api.com";

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/job-orders`);
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await axios.post(`${API_URL}/job-orders`, jobData);
  return response.data;
};
