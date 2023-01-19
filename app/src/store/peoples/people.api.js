import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const peopleApi = createApi({
  reducerPath: 'peoples/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    searchPeople: builder.query({
      query: (search) => ({
        url: `people/`,
        params: {
          search: search,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
})

export const { useSearchPeopleQuery } = peopleApi
