'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VocabularyPage() {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [message, setMessage] = useState('');
  const [flipped, setFlipped] = useState({});
  const [editFields, setEditFields] = useState({});

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

  const toggleCard = (id) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleUpdate = async (id) => {
    const { meaning, importance } = editFields[id] || {};
    const res = await fetch('/api/vocabulary', {
      method: 'PATCH',
      body: JSON.stringify({ id, meaning, importance }),
    });
    const data = await res.json();
    setWords(data.updatedWords);
    setEditFields(prev => ({ ...prev, [id]: {} }));
    setFlipped(prev => ({ ...prev, [id]: false }));
  };

  const handleDelete = async (id) => {
    const res = await fetch('/api/vocabulary', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setWords(data.updatedWords);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-4xl font-bold mb-10 text-center">My Vocabulary</h1>

      {/* Daily Challenge Buttons */}
      <div className="mb-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/main/daily-challenge"
          className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded text-center font-semibold"
        >
          Start Daily Challenge
        </Link>
        <Link
          href="/main/daily-challenge/records"
          className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded text-center font-semibold"
        >
          View Daily Challenge Records
        </Link>
      </div>

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
      <div className="max-w-md mx-auto space-y-4">
        {words.map((entry) => (
          <div
            key={entry.id}
            className="border border-cyan-500 rounded p-4 cursor-pointer hover:bg-cyan-900/10 transition"
            onClick={() => toggleCard(entry.id)}
          >
            {!flipped[entry.id] ? (
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">{entry.word}</span>
                <div className="text-right">
                  {entry.importance && <p className="text-sm">⭐ Importance: {entry.importance}</p>}
                  <p className="text-sm text-gray-400">Forget: {entry.forgetCount}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(entry.id);
                    }}
                    className="text-red-400 text-xs mt-1 hover:text-red-600"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {entry.meaning ? (
                  <p className="text-md italic">Meaning: {entry.meaning}</p>
                ) : (
                  <input
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Enter meaning..."
                    className="w-full p-2 mt-1 mb-2 rounded bg-gray-800 border border-cyan-300 text-white"
                    onChange={(e) => setEditFields(prev => ({
                      ...prev,
                      [entry.id]: {
                        ...prev[entry.id],
                        meaning: e.target.value,
                      },
                    }))}
                  />
                )}

                {entry.importance ? null : (
                  <select
                    onClick={(e) => e.stopPropagation()}
                    className="w-full p-2 mb-2 rounded bg-gray-800 border border-cyan-300 text-white"
                    defaultValue=""
                    onChange={(e) => setEditFields(prev => ({
                      ...prev,
                      [entry.id]: {
                        ...prev[entry.id],
                        importance: parseInt(e.target.value),
                      },
                    }))}
                  >
                    <option value="" disabled>Select importance</option>
                    <option value={1}>1 - Low</option>
                    <option value={2}>2 - Medium</option>
                    <option value={3}>3 - High</option>
                  </select>
                )}

                {(editFields[entry.id]?.meaning || editFields[entry.id]?.importance) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(entry.id);
                    }}
                    className="mt-2 px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-600"
                  >
                    Save
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
