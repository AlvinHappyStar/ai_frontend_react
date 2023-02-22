import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { userApi } from './apis/userApi';
import { imageApi } from './apis/imageApi';

import userReducer from './features/userSlice'
import imageReducer from './features/imageSlice'

export default configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,

    userState: userReducer,
    imageState: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      userApi.middleware,
      imageApi.middleware,
    ]),
})

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;