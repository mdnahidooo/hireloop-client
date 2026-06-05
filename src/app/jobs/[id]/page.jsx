import { getJobById } from '@/lib/api/jobs';
import React from 'react';

const page = async({params}) => {
    const { id } = await params;
    console.log(id);
    const job = await getJobById(id);
    console.log(job);

    // Guard clause in case API fails or returns null
    // if (!job) {
    //     return (
    //         <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
    //             <p className="text-zinc-400 text-lg">Job position could not be found or is no longer active.</p>
    //         </div>
    //     );
    // }
    return (
        <div>
            <h2>Job details page dose not work</h2>
        </div>
    );
};

export default page;