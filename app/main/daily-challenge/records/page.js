'use client';

import { useEffect, useState } from 'react';

export default function ChallengeRecordsPage() {
  const [records, setRecords] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch('/api/challenge-history')
      .then(res => res.json())
      .then(data => {
        setRecords(data.records);
        setDays(data.days);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-300 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Daily Challenge Records</h1>

      <div className="max-w-xl mx-auto space-y-4">
        {days.map((date) => {
          const record = records.find(r => r.date === date);
          return (
            <div key={date} className="p-4 border border-cyan-500 rounded">
              <p className="font-semibold">{date}</p>
              {record ? (
                <p className="text-green-400">✅ Score: {record.score}/{record.total}</p>
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
