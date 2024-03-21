// ProblemAddPage.js
import React from 'react';
import ProblemForm from '../../../components/admin/ProblemForm';


function ProblemAddPage() {
  const handleAdd = (formData) => {
    // api.post('/problems', formData)
    //   .then(() => {
    //     // Handle success
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  };

  return (

      <ProblemForm
        initialValues={{ title: '', description: '', /* other fields */ }}
        onSubmit={handleAdd}
      />
    
  );
}

export default ProblemAddPage;
