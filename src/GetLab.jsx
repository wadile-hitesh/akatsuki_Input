import React from 'react'
import { useState } from 'react';
import BackgroundImage from './assets/background.svg'
import DetectiveImage from './assets/detective.svg'
import AkatsukiImage from './assets/akatsuki.svg'
import LastBackground from './assets/last.svg'

function GetLab(){
    const [data, setData] = useState("")
    const [labs,setLabs] = useState("")
    const arr = ["aset", "setb", "cset", "setd","eset","afnen"]
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLabs(data)
        console.log(labs);
    }
    return !labs ? (
        <div className='relative'>
            <div className='absolute left-0 top-0 z-[-1]'>
            <img className='w-full h-full ' src={BackgroundImage} />
            </div>
            <div className='w-full z-10 top-0 pt-10'>
                <img className='w-2/4 m-auto' src={DetectiveImage} />
            </div>
            <div className='bg-[linear-gradient(180deg,_rgba(76,_49,_52,_0.70)_0%,_rgba(28,_52,_80,_0.43)_0.01%,_rgba(76,_49,_49,_0.70)_100%)] font-[Poppins] text-white w-3/4 mx-auto mt-5  rounded-xl py-8 px-1'>
                <div className='mx-6 p-1 rounded-lg text-xl font-mono font-bold my-2'>
                    <p className=' '>Welcome to</p>
                    <p className=' bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-mono font-bold'>PDF Safari Round</p>
                    <form onSubmit={handleSubmit}>
                        <label className='text-sm font-light '>Enter the Code</label>
                        <input className='w-full font-light text-sm rounded-md p-1 text-black' value={data} placeholder='Your Code' onChange={(e)=> setData(e.target.value)}/>

                        <button className='w-full mt-2 font-light text-sm rounded-md p-1 bg-blue-500 text-white' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        <div className='bg-black w-100vw h-100vh'>
            <div className='relative'>
                    <div className='w-full z-10 top-0 pt-10 '>
                        <img className='w-1/4 m-auto' src={AkatsukiImage} />
                    </div>
                   
            </div>
                <div className='bg-black text-white flex flex-wrap w-3/4 mx-auto justify-center items-center my-2 border-2 border-white relative rounded-tr-[30px] rounded-bl-[30px]'>
                <div className='mx-2 my-4'>
                    <p className='py-2'>Round Details</p>
                        <p className='py-1'>Lab Number : {labs[0] + labs[1]}</p>
                        <p className='py-1'>Desk No : {labs[2] + labs[3]}</p>     
                        <p className='py-1'>First PDF Password : {arr[labs[5]-1]}</p>       
                </div>
            </div>
            <div className=' flex mx-auto text-white py-2 justify-center italic'>
                    <p>Best of Luck for PDF Safari 💌</p>
            </div>
                <div className='absolute bottom-0 z-[-10]'>
                    <img className='w-full h-full' src={LastBackground} />
                </div>
        </div>
    )
}

export default GetLab