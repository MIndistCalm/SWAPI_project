import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination';
import { useAppSelector } from '../hooks/redux'

const FavouritesPage = () => {

  const [current, setCurrent] = useState(1);
  const { favourites } = useAppSelector(state => state.favourites)
  const pages = Math.ceil(favourites.length / 10)
  const perPage = 10
  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(favourites.slice(current * perPage - perPage, current * perPage))
  }, [current, favourites]);

  if (favourites.length === 0) return <p className='text-center m-10 text-2xl p-5 border rounded-md bg-gray-200'>No items</p>

  return <div className='bg-white'>
    <div className='mx-auto max-w-2xl py-10 sm:py-10  lg:max-w-7xl'>
      <div className='mb-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
        {favs.map((character) => {
          return <Card key={character.url + 'favs'} person={character} />
        })}
      </div>
      <Pagination current={current} setCurrent={setCurrent} pages={pages} />
    </div>
  </div>
}
export default FavouritesPage