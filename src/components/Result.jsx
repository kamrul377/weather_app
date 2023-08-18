import React from 'react'
import { ImLocation, ImLocation2 } from 'react-icons/im'
import '../App.css'
import summer from '../assets/summer.jpeg'

const Result = ({ result }) => {
    // console.log(result.name)
    // console.log(result.main.temp)
    return (

        <>
            <div className='w-full  p-4'>
                {
                    result.name !== undefined ?

                        <div className='w-full flex flex-col sm:flex-row justify-between items-center'>

                            <div className=' text-xl font-bold text-indigo-900'>
                                <h1>Temparature : {result.main.temp} °C </h1>
                                <h1>Max Temp : {result.main.temp_max} °C </h1>
                                <h1>Min Temp : {result.main.temp_min} °C</h1>
                                <h1>Feels Like : {result.main.feels_like}°C</h1>
                            </div>

                            <div className=' flex flex-col p-4 items-center justify-center'>
                                <ImLocation size={40} color='#444' />
                                <p className='text-md font-bold'>{result.name}</p>
                            </div>

                            <div className="image">
                                <p className='text-xl font-bold border-b text-center text-slate-500'>{result.weather[0].description}</p>
                                <img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} alt="" />
                            </div>

                        </div> :

                        <div className='bg-lime-100 text-green-700 text-4xl font-bold text-center py-4'> Type any place.. </div>
                }
            </div>

        </>

    )
}

export default Result