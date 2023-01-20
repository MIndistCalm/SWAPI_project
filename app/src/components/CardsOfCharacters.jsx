import Card from './Card'

const CardsOfCharacters = ({data}) => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-10 sm:py-10 px-10 lg:max-w-7xl'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
          {data && data.results.map((character) => {
            return (
              character && (
                <Card
                  key={character.url + 'card'}
                  person={character}
                />
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CardsOfCharacters
