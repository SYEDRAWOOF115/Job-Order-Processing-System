import React from "react";
import JobForm from "../components/JobForm";

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Job Order</h2>
      <JobForm />
    </div>
  );
};

export default Home;
