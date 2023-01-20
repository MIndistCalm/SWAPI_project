import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { peopleApi } from './peoples/people.api'
import { peopleReducer } from './peoples/people.slice'

const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    favourites: peopleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
})

export default store

setupListeners(store.dispatch)
