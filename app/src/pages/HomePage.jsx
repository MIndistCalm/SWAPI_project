import React, { useEffect, useState } from 'react'
import CardsOfCharacters from '../components/CardsOfCharacters';
import Pagination from '../components/Pagination';
import { useDebounce } from '../hooks/debounce';
import { useSearchPeopleQuery } from '../store/peoples/people.api'

const HomePage = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search)
  const [current, setCurrent] = useState(1);
  const { isLoading, isError, data } = useSearchPeopleQuery({ search: debounced, page: current }, {
    refetchOnFocus: true,
  })
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(data && data.count / 10))
  }, [current, data]);

  return (
    <div className='flex flex-col items-center pt-10 max-full h-auto w-screen'>
      {isError && <p className='text-center text-red-600 text-2xl p-5 border w-full rounded-md bg-gray-100'>Something went wrong...</p>}

      <div className='relative w-[560px]'>
        <input
          type='text'
          className='border rounded-md py-2 px-4 w-full h-[42px]'
          placeholder='Search Star Wars character...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrent(1)
          }}
        />
      </div>
      <div className='relative'>
        {isLoading && <p className='text-center m-10 w-full text-2xl p-5 border rounded-md bg-gray-200'>Loading...</p>}
        {data && <CardsOfCharacters data={data} />}
      </div>
      <Pagination data={data} current={current} setCurrent={setCurrent} pages={pages} />
    </div>
  )
}

export default HomePage