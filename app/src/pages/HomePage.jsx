import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce';
import { useSearchPeopleQuery } from '../store/peoples/people.api'

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchPeopleQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  })

  useEffect(() => {
    setVisibleDropdown(debounced.length > 3 && data)
    console.log(data)
  }, [debounced, data]);

  return (
    <div className='flex justify-center pt-10 max-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-600'>Someting went wrong...</p>}

      <div className='relative w-[560px]'>
        <input
          type='text'
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search for Star Wars character...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {visibleDropdown && <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
          {isLoading && <p className='text-center text-gray-500'>Loading...</p>}
          {data?.results.map((person) => {
            return <li
              key={person.url}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white cursor-pointer'
            >
              {person.name}
            </li>
          })}
        </ul>}
      </div>

    </div>
  )
}

export default HomePage