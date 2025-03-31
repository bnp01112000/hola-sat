'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';



export default function TestPage() {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [title, setTitle] = useState('');
    const router = useRouter(); // 🔥 you'll need to import this

    const handleFinishTest = async () => {
        await fetch('/api/finish-test', {
            method: 'POST',
            body: JSON.stringify({ testId: id }),
        });

        router.push('/main'); // back to profile page
    };
    useEffect(() => {
        fetch(`/api/test/${id}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.questions);
                setTitle(data.title);
            });
    }, [id]);

    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState({});

    const handleSubmit = async (qId) => {
        const res = await fetch('/api/submit-answer', {
            method: 'POST',
            body: JSON.stringify({
                questionId: qId,
                answer: answers[qId],
                testId: id,
            }),
        });
        const result = await res.json();
        setSubmitted((prev) => ({ ...prev, [qId]: result.correct }));
    };

    return (
        <div className="min-h-screen bg-black text-cyan-300 p-8 overflow-y-auto">
            <h1 className="text-4xl font-bold mb-10 text-center">{title}</h1>

            {questions.map((q, i) => (
                <div key={q.id} className="mb-6 border border-cyan-300 rounded-xl p-4">
                    <p className="mb-2 font-semibold">Question {q.number}</p>
                    <div className="flex gap-4 mb-2">
                        {['A', 'B', 'C', 'D'].map((opt) => (
                            <label key={opt}>
                                <input
                                    type="radio"
                                    name={`q${q.id}`}
                                    value={opt}
                                    checked={answers[q.id] === opt}
                                    onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                                />
                                <span className="ml-1">{opt}</span>
                            </label>
                        ))}
                    </div>

                    {!submitted[q.id] && submitted[q.id] !== false ? (
                        <button
                            onClick={() => handleSubmit(q.id)}
                            className="mt-2 px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-600"
                        >
                            Submit
                        </button>
                    ) : (
                        <p className={`mt-2 font-medium ${submitted[q.id] ? 'text-green-400' : 'text-red-500'}`}>
                            {submitted[q.id] ? 'Correct' : 'Incorrect'}
                        </p>
                    )}
                </div>
            ))}
            {Object.keys(submitted).length === questions.length && (
                <button
                    onClick={handleFinishTest}
                    className="mt-10 w-full max-w-xs mx-auto block bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded"
                >
                    Submit Entire Test
                </button>
            )}
        </div>
    );
}
