'use client';

import { useState, useActionState } from 'react';
import handleSAT from '@/app/handleSAT';



export default function Test() {
    const [q1, changeQ1] = useState("");
    const [q2, changeQ2] = useState("");
    const [q3, changeQ3] = useState("");
    const [q4, changeQ4] = useState("");
    const [q5, changeQ5] = useState("");
    const [q6, changeQ6] = useState("");
    const [q7, changeQ7] = useState("");
    const [q8, changeQ8] = useState("");
    const [q9, changeQ9] = useState("");
    const [q10, changeQ10] = useState("");
    const [q11, changeQ11] = useState("");
    const [q12, changeQ12] = useState("");
    const [q13, changeQ13] = useState("");
    const [q14, changeQ14] = useState("");
    const [q15, changeQ15] = useState("");
    const [q16, changeQ16] = useState("");
    const [q17, changeQ17] = useState("");
    const [q18, changeQ18] = useState("");
    const [q19, changeQ19] = useState("");
    const [q20, changeQ20] = useState("");
    const [q21, changeQ21] = useState("");
    const [q22, changeQ22] = useState("");
    const [q23, changeQ23] = useState("");
    const [q24, changeQ24] = useState("");
    const [q25, changeQ25] = useState("");
    const [q26, changeQ26] = useState("");
    const [q27, changeQ27] = useState("");
    const [q28, changeQ28] = useState("");
    const [q29, changeQ29] = useState("");
    const [q30, changeQ30] = useState("");
    const [q31, changeQ31] = useState("");
    const [q32, changeQ32] = useState("");
    const [q33, changeQ33] = useState("");

    const [state, action] = useActionState(handleSAT, null, 'n/a');
    return (

        <div class="min-h-screen content-center">
            <form class="max-w-sm mx-auto" action={action}>
                <div class="mb-5">
                    <label htmlFor="q1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ1(e.target.value)} type="text" name="q1" placeholder="q1" value={q1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ2(e.target.value)} type="text" name="q2" placeholder="q2" value={q2} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ3(e.target.value)} type="text" name="q3" placeholder="q3" value={q3} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ4(e.target.value)} type="text" name="q4" placeholder="q4" value={q4} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q5" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ5(e.target.value)} type="text" name="q5" placeholder="q5" value={q5} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q6" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ6(e.target.value)} type="text" name="q6" placeholder="q6" value={q6} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q7" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ7(e.target.value)} type="text" name="q7" placeholder="q7" value={q7} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q8" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ8(e.target.value)} type="text" name="q8" placeholder="q8" value={q8} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q9" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ9(e.target.value)} type="text" name="q9" placeholder="q9" value={q9} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q10" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ10(e.target.value)} type="text" name="q10" placeholder="q10" value={q10} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q11" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ11(e.target.value)} type="text" name="q11" placeholder="q11" value={q11} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q12" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ12(e.target.value)} type="text" name="q12" placeholder="q12" value={q12} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q13" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ13(e.target.value)} type="text" name="q13" placeholder="q13" value={q13} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q14" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ14(e.target.value)} type="text" name="q14" placeholder="q14" value={q14} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q15" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ15(e.target.value)} type="text" name="q15" placeholder="q15" value={q15} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q16" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ16(e.target.value)} type="text" name="q16" placeholder="q16" value={q16} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q17" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ17(e.target.value)} type="text" name="q17" placeholder="q17" value={q17} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q18" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ18(e.target.value)} type="text" name="q18" placeholder="q18" value={q18} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q19" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ19(e.target.value)} type="text" name="q19" placeholder="q19" value={q19} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q20" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ20(e.target.value)} type="text" name="q20" placeholder="q20" value={q20} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q21" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ21(e.target.value)} type="text" name="q21" placeholder="q21" value={q21} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q22" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ22(e.target.value)} type="text" name="q22" placeholder="q22" value={q22} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q23" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ23(e.target.value)} type="text" name="q23" placeholder="q23" value={q23} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q24" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ24(e.target.value)} type="text" name="q24" placeholder="q24" value={q24} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q25" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ25(e.target.value)} type="text" name="q25" placeholder="q25" value={q25} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q26" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ26(e.target.value)} type="text" name="q26" placeholder="q26" value={q26} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q27" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ27(e.target.value)} type="text" name="q27" placeholder="q27" value={q27} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q28" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ28(e.target.value)} type="text" name="q28" placeholder="q28" value={q28} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q29" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ29(e.target.value)} type="text" name="q29" placeholder="q29" value={q29} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q30" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ30(e.target.value)} type="text" name="q30" placeholder="q30" value={q30} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q31" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ31(e.target.value)} type="text" name="q31" placeholder="q31" value={q31} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q32" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ32(e.target.value)} type="text" name="q32" placeholder="q32" value={q32} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div class="mb-5">
                    <label htmlFor="q33" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input onChange={e => changeQ33(e.target.value)} type="text" name="q33" placeholder="q33" value={q33} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Sign in</button>
            </form>
        </div>
    )
}