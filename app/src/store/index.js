import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { peopleApi } from './peoples/people.api'
import { peopleReducer } from './peoples/people.slice'
import { planetsApi } from './planets/planets.api'

const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
    favourites: peopleReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware, planetsApi.middleware),
})

export default store

setupListeners(store.dispatch)
