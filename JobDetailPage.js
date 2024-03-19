import React from 'react';
import { useParams } from 'react-router-dom';

function JobDetailPage() {
  const { id } = useParams();
  // Fetch job details from backend API based on id

  return (
    <div>
      {/* Display job details here */}
    </div>
  );
}

export default JobDetailPage;
