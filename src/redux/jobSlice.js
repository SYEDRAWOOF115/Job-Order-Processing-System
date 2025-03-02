import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex(job => job.id === action.payload.id);
      if (index !== -1) state.jobs[index] = action.payload;
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
  },
});

export const { setJobs, addJob, updateJob, deleteJob } = jobSlice.actions;
export default jobSlice.reducer;
