import React from "react";
import JobList from "../components/JobList";

const Jobs = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Job Orders</h2>
      <JobList />
    </div>
  );
};

export default Jobs;
