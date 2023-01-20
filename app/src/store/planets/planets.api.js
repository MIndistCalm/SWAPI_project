import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const planetsApi = createApi({
  reducerPath: 'planets/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getPlanet: builder.query({
      query: (id) => {
        return {
          url: `planets/${id}`,
        }
      },
      transformResponse: (response) => response,
    }),
  }),
})

export const { useGetPlanetQuery } = planetsApi
