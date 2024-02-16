import React, { useState } from 'react'
import service from './appwrite/service';


function AddLab() {
    const [data,setData] = useState({id : "",labNumber:"", password: "", code : ""})
    // const id = useId()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(data); 
        const res = await service.addLab(data)
        console.log(res);
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">id</label>
                        <input type="text" id="first_name" value={data.id} onChange={(e)=> setData({...data, id : e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lab Number</label>
                        <input type="text" id="last_name" value={data.labNumber} onChange={(e) => setData({ ...data, labNumber: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="text" id="company" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Code</label>
                        <input type="text" id="code" value={data.code} onChange={(e) => setData({ ...data, code: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required />
                    </div>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default AddLab