// components/LoginComponent.js
import React, { useState } from 'react';

const LoginComponent = () => {
  const [response, setResponse] = useState('');

  const login = async () => {
    const url = "http://dev-api.homecharger.link:8080/api/authenticate";  // Use the proxy endpoint
    const data = {
      username: "admin",
      password: "admin",
      rememberMe: true
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Host":"172.23.144.1",
          "Accept": "*/*",
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTc0MzU4NzMwNn0.onTzA2AexiDb0j-EEATCzgYCMwZ6f7usK7y3hvA_2OxvtndZ4helDhHEi5dfj_FRPt8OVSV2Mu1o6Weji4ZY8w" // Add your token here
        },
        body: JSON.stringify(data),
        credentials: "include"
      });

      const result = await response.json();
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse("Error: " + error);
    }
  };

  return (
    <div>
      <button onClick={login}>Login</button>
      <pre>{response}</pre>
    </div>
  );
};

export default LoginComponent;
