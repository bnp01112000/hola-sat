'use client';

import { useState, useActionState } from 'react';
import handleForm from '@/app/handleForm';
import Link from 'next/link';

export default function Login() {
    const [username, changeUser] = useState("");
    const [password, changePass] = useState("");
    const [state, action] = useActionState(handleForm, null, 'n/a');
    return (
        <div className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Glowing background blob */}
            <div className="absolute w-80 h-80 bg-cyan-500 blur-3xl opacity-20 rounded-full top-20 z-0" />

            {/* HOLA-SAT heading */}
            <h1 className="text-6xl font-extrabold text-cyan-300 tracking-wide mb-20 z-10 drop-shadow-lg">
                HOLA-SAT
            </h1>

            {/* Form container */}
            <form className="w-full max-w-md px-4 flex flex-col items-center z-10 space-y-6" action={action}>
                <div className="w-full">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
                        Username:
                    </label>
                    <input
                        onChange={(e) => changeUser(e.target.value)}
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
                        onChange={(e) => changePass(e.target.value)}
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

            {/* Error/message */}
            <p className="hidden mt-6 text-red-500 z-10">
                {state ? <Link href="/test">Main Page</Link> : "Wrong account"}
            </p>
        </div>




    )
}