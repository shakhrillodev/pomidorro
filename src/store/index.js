import { configureStore } from '@reduxjs/toolkit'
import countSlice from '../slices/countSlice'

export default configureStore({
	reducer: {
		counter: countSlice
	},
	devTools: process.env.NODE_ENV !== 'production',
})