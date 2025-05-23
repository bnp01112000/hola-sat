'use client';

import { useEffect, useState } from 'react';

export default function ChallengeRecordsPage() {
  const [records, setRecords] = useState([]);
  const [days, setDays] = useState([]);
  const [expanded, setExpanded] = useState({}); // tracks which records are expanded

  useEffect(() => {
    fetch('/api/challenge-history')
      .then(res => res.json())
      .then(data => {
        setRecords(data.records);
        setDays(data.days);
      });
  }, []);

  const toggleExpanded = (date) => {
    setExpanded(prev => ({ ...prev, [date]: !prev[date] }));
  };

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daily Challenge Records</h1>

      <div className="max-w-xl mx-auto space-y-4">
        {days.map((date) => {
          const dayRecords = records.filter(r => r.date === date);
          const isExpanded = expanded[date];
          return (
            <div
              key={date}
              onClick={() => dayRecords.length > 0 && toggleExpanded(date)}
              className={`p-4 border border-cyan-500 rounded cursor-pointer transition hover:bg-cyan-900/10`}
            >
              <p className="font-semibold">{date}</p>
              {dayRecords.length > 0 ? (
                <>
                  {dayRecords.map((record, index) => (
                    <div key={index} className="mt-2 pl-2 border-l border-cyan-300">
                      <p className="text-green-400">
                        ✅ Score: {record.score}/{record.total}
                      </p>
                      {isExpanded && (
                        <>
                          {record.wrongWords.length > 0 ? (
                            <div className="mt-1 text-sm text-red-300">
                              <p className="mb-1">❌ Wrong words:</p>
                              <ul className="list-disc list-inside space-y-1">
                                {record.wrongWords.map((word, i) => (
                                  <li key={i}>{word}</li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <p className="mt-1 text-sm text-green-300">🎉 No mistakes!</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-red-400">❌ No challenge completed</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
