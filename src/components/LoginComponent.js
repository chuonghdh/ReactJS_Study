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
