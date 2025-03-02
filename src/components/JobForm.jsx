import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/jobSlice";
import { createJob } from "../api/jobApi";

const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = { title, description, status: "Pending" };
    const createdJob = await createJob(newJob);
    dispatch(addJob(createdJob));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <input
        type="text"
        placeholder="Job Title"
        className="w-full p-2 border rounded mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Job Description"
        className="w-full p-2 border rounded mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Job</button>
    </form>
  );
};

export default JobForm;
