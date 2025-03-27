'use client';

import { useState, useActionState } from 'react';
import handleForm from '@/app/handleForm'; 
import Link from 'next/link'; 

export default function Login() {
    const [username, changeUser] = useState("");
    const [password, changePass] = useState("");
    const [state, action] = useActionState(handleForm, null, 'n/a'); 
    return (
        <div class = "min-h-screen content-center">
            <form class="max-w-sm mx-auto" action={action}>
                <div class="mb-5">
                    <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeUser(e.target.value)} type="text" name="username" placeholder="Enter username" value={username} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changePass(e.target.value)} type="text" name="password" placeholder="Enter password" value={password} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Sign in</button>
            </form>
            <p> {state ? <Link href="/test">Main Page</Link> : <p> Wrong account </p>}</p>
        </div>
    )
}