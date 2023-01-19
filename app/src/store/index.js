import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { peopleApi } from './peoples/people.api'

const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
})

export default store

setupListeners(store.dispatch)
