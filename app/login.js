'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("previous");
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    console.log("reached");
    if (res.ok) {
      router.push('/main');
    } else {
      setError('Wrong account. Try again.');
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-80 h-80 bg-cyan-500 blur-3xl opacity-20 rounded-full top-20 z-0" />

      <h1 className="text-6xl font-extrabold text-cyan-300 tracking-wide mb-20 z-10 drop-shadow-lg">
        HOLA-SAT
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md px-4 flex flex-col items-center z-10 space-y-6">
        <div className="w-full">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
            Username:
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            name="username"
            placeholder="Enter username"
            className="w-full border bg-gray-800 border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
            Password:
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full border bg-gray-800 border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>

      {error && (
        <div className="mt-6 px-4 py-2 bg-red-500/10 text-red-300 rounded-md border border-red-500/20 backdrop-blur-sm text-sm font-medium z-10">
          {error}
        </div>
      )}
    </div>
  );
}
