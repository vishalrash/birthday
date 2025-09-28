import React, { useState } from 'react';

const PasswordGate = ({ onSuccess }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "shree21006") {
      onSuccess();  // Allow access
    } else {
      setError("Incorrect password. Try again!");
      setInput('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <form onSubmit={handleSubmit} className="p-8 rounded bg-white shadow-md">
        <h2 className="mb-4 text-xl font-bold text-pink-600">Welcome! Enter your password to explore</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-pink-300 rounded px-3 py-2 mb-2 w-full"
          placeholder="Password"
          required
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded w-full">Unlock</button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default PasswordGate;
