import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
// import { setImage } from '../features/imageSlice'
// import { config } from '../../config/config'

// const baseUrl = `${config.SERVER_URL}/api/`

export const imageApi = createApi({
    reducerPath: 'imageApi',
    // baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Image'],
    endpoints: (builder) => ({
        // setImage: builder.mutation({
        //     query(data) {
        //         return {
        //             url: 'image/',
        //             method: 'POST',
        //             body: data
        //         }
        //     },
        //     transformResponse: (result) =>
        //         result.image,
        //     async onQueryStarted(args, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data } = await queryFulfilled;
        //             dispatch(setImage(data));
        //         } catch (error) { }
        //     },
        // }),
    }),
});

export const {
    // useSetImageMutation
} = imageApi;