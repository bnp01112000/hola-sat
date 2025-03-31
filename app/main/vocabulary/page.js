'use client';

import { useEffect, useState } from 'react';

export default function VocabularyPage() {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/vocabulary')
      .then(res => res.json())
      .then(data => setWords(data.words));
  }, []);

  const handleAddWord = async () => {
    const res = await fetch('/api/vocabulary', {
      method: 'POST',
      body: JSON.stringify({ word: newWord }),
    });

    const data = await res.json();
    setMessage(data.message);
    setNewWord('');
    setWords(data.updatedWords);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">My Vocabulary</h1>

      {/* Add Word */}
      <div className="mb-8 max-w-md mx-auto">
        <input
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          placeholder="Add a new word..."
          className="w-full p-2 rounded bg-gray-800 text-white border border-cyan-300 mb-2"
        />
        <button
          onClick={handleAddWord}
          className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-black rounded font-semibold"
        >
          Add Word
        </button>
        {message && <p className="mt-2 text-sm text-yellow-400">{message}</p>}
      </div>

      {/* Word List */}
      <div className="max-w-md mx-auto space-y-3">
        {words.map((entry, i) => (
          <div
            key={i}
            className="flex justify-between items-center border border-cyan-500 rounded p-3"
          >
            <span className="font-semibold">{entry.word}</span>
            <span className="text-sm text-gray-400">Forget: {entry.forgetCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
