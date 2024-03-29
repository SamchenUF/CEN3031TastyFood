import React, { useState } from 'react';
import Layout from "@/components/layout";

const Login = () => {
  // hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle authentication
    console.log('Submitting:', { username, password });
    alert(`Login attempt with username: ${username} and password: ${password}`);
  };

  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 pr-">Login Page</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:  </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p></p>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:   </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
          <p></p>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            {/*include a "Sign Up" or "Forgot Password?" link here */}
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default Login;
