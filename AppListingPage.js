import React from 'react';

function JobListingsPage() {
  // Fetch job listings from backend API
  const jobListings = []; // Assume fetched job listings here

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobListings.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobListingsPage;
