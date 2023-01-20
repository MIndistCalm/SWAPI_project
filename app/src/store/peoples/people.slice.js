import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: JSON.parse(localStorage.getItem('favourites') ?? '[]'),
}

export const peopleSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite(state, action) {
      state.favourites.push(action.payload)
      localStorage.setItem('favourites', JSON.stringify(state.favourites))
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter((person) => person.name !== action.payload.name)
      localStorage.setItem('favourites', JSON.stringify(state.favourites))
    },
  },
})

export const peopleActions = peopleSlice.actions
export const peopleReducer = peopleSlice.reducer
