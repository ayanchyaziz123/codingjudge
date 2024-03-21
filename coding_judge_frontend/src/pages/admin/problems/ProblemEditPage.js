// ProblemEditPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import ProblemForm from '../../../components/admin/ProblemForm';

function ProblemEditPage() {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    api.get(`/problems/${id}`)
      .then(response => {
        setProblem(response.data);
      })
      .catch(error => {
        console.error('Error fetching problem:', error);
      });
  }, [id]);

  const handleUpdate = (formData) => {
    api.put(`/problems/${id}`, formData)
      .then(() => {
        // Handle success
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    <div>
      <ProblemForm
        initialValues={problem}
        formTitle="Edit Problem"
        onSubmit={handleUpdate}
      />
    </div>
  );
}

export default ProblemEditPage;
