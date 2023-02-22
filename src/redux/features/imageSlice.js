import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  images: [

  ]
}

const imageSlice = createSlice({
  name: 'imageSlice',
  initialState,
  reducers: {
    setImage: (state, action) => {
      console.log("setImage", action.payload)
      state.images = action.payload
    },
    addImage: (state, action) => {
      console.log("addImage", action.payload)
      state.images.push(action.payload)
    }
  },
})

export default imageSlice.reducer

export const { setImage, addImage } = imageSlice.actions