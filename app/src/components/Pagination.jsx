import React from 'react'

const Pagination = ({ current, setCurrent, pages }) => {

  const increment = () => {
    setCurrent(prev => prev + 1)
  }

  const decrement = () => {
    setCurrent(prev => prev - 1)
  }

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="flex select-none space-x-1 text-gray-700">
        {current > 1 && <button className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400" onClick={decrement}> Previous </button>}
        {current < pages && <button className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400" onClick={increment}> Next </button>}
      </div>
    </div>

  )
}

export default Pagination