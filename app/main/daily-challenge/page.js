'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DailyChallengePage() {
  const [words, setWords] = useState([]);
  const [shuffledMeanings, setShuffledMeanings] = useState([]);
  const [matches, setMatches] = useState({});
  const [timer, setTimer] = useState(900); // 15 minutes in seconds
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/daily-challenge')
      .then((res) => res.json())
      .then((data) => {
        setWords(data.words);
        const meanings = [...data.words.map(w => w.meaning)].sort(() => Math.random() - 0.5);
        setShuffledMeanings(meanings);
      });
  }, []);

  useEffect(() => {
    if (timer <= 0 || submitted) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, submitted]);

  const handleMatchChange = (wordId, selectedMeaning) => {
    setMatches(prev => ({ ...prev, [wordId]: selectedMeaning }));
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/daily-challenge', {
      method: 'POST',
      body: JSON.stringify({ matches }),
    });
    /** 
    if (!res.ok) {
      const text = await res.text(); // Try reading it as plain text
      console.error('Server Error:', text);
      alert(`Failed to submit: ${res.status} ${text}`);
      return;
    }
    */
    const result = await res.json();
    setSubmitted(true);
    alert(`Challenge submitted! You scored ${result.correct}/40`);
    router.push('/main/vocabulary');
  };

  const formatTime = () => {
    const m = Math.floor(timer / 60);
    const s = timer % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Daily Vocab Challenge</h1>
      <p className="text-center text-sm mb-8">Match the words to their correct meanings. Time left: <span className="font-semibold">{formatTime()}</span></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Word column */}
        <div className="space-y-4">
          {words.map((entry) => (
            <div key={entry.id} className="p-4 border border-cyan-500 rounded">
              <p className="mb-2 font-semibold">{entry.word}</p>
              <select
                className="w-full bg-gray-800 border border-cyan-300 text-white p-2 rounded"
                onChange={(e) => handleMatchChange(entry.id, e.target.value)}
                defaultValue=""
              >
                <option value="" disabled>Select meaning</option>
                {shuffledMeanings.map((m, idx) => (
                  <option key={idx} value={m}>{m}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {!submitted && (
        <div className="text-center mt-10">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded"
          >
            Submit Challenge
          </button>
        </div>
      )}
    </div>
  );
}
