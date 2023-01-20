import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useGetPlanetQuery } from '../store/planets/planets.api'

const InfoModal = ({ open, setOpen, id }) => {
  const { isLoading, isError, data } = useGetPlanetQuery(id)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {isError && <p className='text-center text-red-600 text-2xl p-5 border w-full rounded-md bg-gray-100'>Something went wrong...</p>}
                    {!isLoading ? <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-2xl mb-4 font-medium leading-6 text-gray-900">
                        {data && data.name}
                      </Dialog.Title>
                      {!!id && <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt={'Planet img wasn\'t founded'}
                        className='h-full w-full object-cover rounded-xl object-center lg:h-full lg:w-full'
                      />}
                      <div className="mt-2">
                        <p className="text-md text-gray-900">
                          Climate: {data && data.climate}
                        </p>
                        <p className="text-md text-gray-900">
                          Diameter: {data && data.diameter}
                        </p>
                        <p className="text-md text-gray900">
                          Population: {data && data.population}
                        </p>
                        <p className="text-md text-gray-900">
                          Terrain: {data && data.terrain}
                        </p>
                        <p className="text-md text-gray-900">
                          Gravity: {data && data.gravity}
                        </p>
                        <p className="text-md text-gray-900">
                          Orbital period: {data && data.orbital_period}
                        </p>
                        <p className="text-md text-gray-900">
                          Rotation period: {data && data.rotation_period}
                        </p>
                      </div>
                    </div> : <p className='text-center m-10 w-full text-2xl p-5 border rounded-md bg-gray-200'>Loading...</p>}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 pb-4 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default InfoModal