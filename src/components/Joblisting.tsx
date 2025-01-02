import { useState } from "react";
import jobs from "../job.json";

const JobListing = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null); // Tracks which job's description is expanded

  const toggleDescription = (id: number) => {
    setExpandedJob((prev) => (prev === id ? null : id)); // Toggles description visibility
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id} // Correct key property
              className="bg-white rounded-xl shadow-md relative"
            >
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{job.type}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                <div className="mb-5">
                  {expandedJob === job.id ? (
                    <>
                      {job.description}
                      <button
                        onClick={() => toggleDescription(job.id)}
                        className="text-indigo-500 ml-2"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      {job.description.slice(0, 30)}...
                      <button
                        onClick={() => toggleDescription(job.id)}
                        className="text-indigo-500 ml-2"
                      >
                        Read More
                      </button>
                    </>
                  )}
                </div>
                <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>{" "}
                    {job.location}
                  </div>
                  <a
                    href={`job/${job.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;