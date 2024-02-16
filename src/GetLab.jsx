import React from 'react'
import { useState } from 'react';
import service from './appwrite/service';

function GetLab() {

    const [data, setData] = useState("")
    const [input,setInput] = useState(true)
    const [labs,setLabs] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        // await service.getLab(data)?
        setLabs(data)
        // console.log(data);
    }
    return !labs ? (
        <div><div className='w-screen h-screen bg-gray-900 box-border'>
            <form onSubmit={handleSubmit}>

                <div className="mb-6 mx-6">
                    <label htmlFor="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your code</label>
                    <input type="text" id="success" value={data} onChange={(e) => setData(e.target.value)} className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Input" />
                    {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Well done!</span> Some success message.</p> */}
                </div>
                <div className='flex m-6 justify-center'>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>

            </form>
        </div></div>
    ) : (
        <div>
                <p>Your LabNumber : {labs[0] + labs[1]}</p>
                <p>Desk No : {labs[2] + labs[3]}</p>            
        </div>
    )
}

export default GetLab