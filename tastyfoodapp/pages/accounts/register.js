import React, { useState } from 'react';
import Layout from "@/components/layout";

export default function Register() {
    return (
      <Layout>
        <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:  </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
              style={{ color: 'black',
                        paddingLeft: "10px",
                  }}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Set new password:  </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                style={{ color: 'black',
                          paddingLeft: "10px",
                    }}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:  </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                style={{ color: 'black',
                          paddingLeft: "10px",
                    }}
            />
            </div>
            <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign up!
            </button>
            </div>
        </main>
      </Layout>
    );
  };
  