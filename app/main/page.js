'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (!session) {
        router.push("/"); // or wherever your login page is
        return null;
    }

    const username = session.user.name;
    return (
        <div className="w-screen h-screen bg-black text-cyan-300 flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Username circle in top-right */}
            <div className="absolute top-6 right-6 z-10">
                <div className="w-16 h-16 rounded-full border-2 border-cyan-300 flex items-center justify-center text-lg font-bold">
                    {username}
                </div>
            </div>

            {/* Header */}
            <h1 className="text-5xl font-extrabold mb-16 drop-shadow-lg z-10 text-center">
                PROFILE PAGE
            </h1>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl z-10">
                <Link
                    href="/main/testing-history"
                    className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:bg-cyan-900/10 transition font-semibold text-cyan-300"
                >
                    View Testing History
                </Link>
                <Link
                    href="/main/vocabulary"
                    className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:bg-cyan-900/10 transition font-semibold text-cyan-300"
                >
                    Practice Vocabulary
                </Link>
                <button className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:bg-cyan-900/10 transition">
                    <span className="text-lg font-semibold">Practice Reading / Grammar</span>
                </button>
            </div>
        </div>
    );
}