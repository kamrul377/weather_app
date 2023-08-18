import React, { useState } from 'react'

import Search from './components/Search.jsx'
import Result from './components/Result.jsx'
import axios from 'axios'
// const url = ``;

function App() {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = () => {
    if (search === '') {
      alert('empty value')
      return
    }
    setLoading(true)
    if (search !== '') {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ba3b9e89f58b50d3ed823243fc6ae4a5&units=metric`).then((res) => {
        console.log(res)
        setResult(res.data)
        setLoading(false)
        setError(null)
      }).catch((error) => {
        console.error(error)
        setLoading(false)
        setError("Location Not Found")
      })
    }

  }

  // console.log(result)

  return (
    <>
      <div className="weather bg-white shadow border rounded w-[90%] sm:w-[70%] md:w-[80%] mx-auto mt-6">
        <h1 className='text-center font-bold text-3xl border-b py-3 bg-gradient-to-r from-indigo-700 to-cyan-700 text-white'>Today's Weather</h1>
        <Search handleSearch={handleSearch} search={search} click={handleClick} loading={loading} />

        {error && <div className='bg-red-200 text-center text-red-700 py-1'>{error}</div>}


        {
          loading ? <div className='bg-indigo-200 text-center py-5 text-3xl font-bold text-blue-500'>


            LOADING .....
          </div> :

            <Result result={result} />
        }


      </div>
    </>
  )
}

export default App
