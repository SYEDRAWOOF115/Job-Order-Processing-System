import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="p-4 bg-gray-100 shadow rounded">
      <h3 className="font-bold">{job.title}</h3>
      <p>{job.description}</p>
      <p>Status: <span className="font-semibold">{job.status}</span></p>
      <Link to={`/jobs/${job.id}`} className="text-blue-500">View Details</Link>
    </div>
  );
};

export default JobCard;
