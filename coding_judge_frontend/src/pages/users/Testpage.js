// GoogleLoginButton.js

import React from 'react';

const TestPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8000/auth/google';
  };

  return (
    <button onClick={handleGoogleLogin}>Login with Google</button>
  );
};

export default TestPage;
