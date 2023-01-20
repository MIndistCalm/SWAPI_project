import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const peopleApi = createApi({
  reducerPath: 'peoples/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    searchPeople: builder.query({
      query: (args) => {
        const { search, page } = args
        return {
          url: `people/`,
          params: {
            search: search,
            page: page,
          },
        }
      },
      transformResponse: (response) => response,
    }),
  }),
})

export const { useSearchPeopleQuery } = peopleApi
