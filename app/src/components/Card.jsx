import React, { useEffect, useState } from 'react'
import { useActions } from '../hooks/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useAppSelector } from '../hooks/redux'

const Card = ({ person }) => {
  const { favourites } = useAppSelector((state) => state.favourites)
  const { addFavourite, removeFavourite } = useActions()
  const [isFav, setIsFav] = useState(favourites.some(item => item.name === person.name))
  const character = person ?? {}

  const addToFavourite = (event) => {
    event.preventDefault()
    addFavourite(character)
  }

  const removeFromFavourite = (event) => {
    event.preventDefault()
    removeFavourite(character)
  }

  useEffect(() => {
    setIsFav(favourites.some(item => item.name === person.name))
  }, [favourites, person]);

  const id = parseInt(character?.url?.replace(/\D/g, ''), 10)

  return (
    <div
      key={`character-${id}`}
      className='group relative shadow-md border rounded-md'
    >
      <div className='min-h-40 shadow-lg aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-60'>
        {!!id && <img
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={''}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />}
      </div>
      <div className='flex justify-between ml-3 my-3 items-center'>
        <h3 className='text-sm text-gray-700'>{character.name}</h3>
        {isFav ? (
          <button
            className='py-2 px-4 bg-transparent mr-3 rounded hover:shadow-md transition-all cursor:pointer'
            onClick={removeFromFavourite}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color='#FA8072'
            />
          </button>
        ) : (
          <button
            className='py-2 px-4 bg-transparent mr-3 rounded hover:shadow-md transition-all cursor:pointer'
            onClick={addToFavourite}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color='#888'
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
