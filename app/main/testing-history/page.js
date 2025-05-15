'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function TestingHistoryPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [finishedTests, setFinishedTests] = useState([]);
    const [unfinishedTests, setUnfinishedTests] = useState([]);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
        if (status === 'authenticated') {
            fetch('/api/testing-history')
                .then((res) => res.json())
                .then((data) => {
                    setFinishedTests(data.finished);
                    setUnfinishedTests(data.unfinished);
                });
        }
    }, [status, router]);

    return (
        <div className="min-h-screen bg-black text-cyan-300 p-8">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold tracking-wide">TESTING HISTORY</h1>
                <div className="border border-cyan-300 rounded-full px-4 py-2 text-lg font-medium">
                    {session?.user?.name}
                </div>
            </div>

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Finished Tests</h2>
                {finishedTests.length === 0 ? (
                    <p className="text-gray-400">0 tests completed.</p>
                ) : (
                    finishedTests.map((test, i) => (
                        <div
                            key={i}
                            className="border border-cyan-300 rounded-xl px-6 py-4 mb-4 flex justify-between items-center hover:bg-cyan-900/10 transition"
                        >
                            <Link href={`/test/${test.id}`} className="text-cyan-300 hover:underline">
                                <h3 className="font-semibold text-lg">{test.title}</h3>
                            </Link>

                            <div className="text-right">
                                <p className="text-2xl text-gray-400 font-bold">{test.score}/{test.totalQuestions}</p>
                                <p className="text-sm text-gray-400">{formatDate(test.completedAt)}</p>
                            </div>
                        </div>
                    ))
                )}
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Unfinished Tests</h2>
                {unfinishedTests.length === 0 ? (
                    <p className="text-gray-400">No unfinished tests.</p>
                ) : (
                    unfinishedTests.map((test, i) => (
                        <div
                            key={i}
                            className="border border-cyan-300 rounded-xl px-6 py-4 mb-4 flex justify-between items-center hover:bg-cyan-900/10 transition"
                        >
                            <div>
                                <Link href={`/test/${test.id}`} className="text-cyan-300 hover:underline">
                                    <h3 className="font-semibold text-lg">{test.title}</h3>
                                </Link>
                                <p className="text-sm text-gray-400">
                                    {test.answeredCount} / {test.totalQuestions} completed
                                </p>
                            </div>
                            <div className="text-right">
                                {test.completedAt && (
                                    <p className="text-sm text-gray-400">{formatDate(test.completedAt)}</p>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
