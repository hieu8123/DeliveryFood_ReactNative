import { configureStore } from '@reduxjs/toolkit'
import restaurantSlices from './slices/restaurantSlices'
import basketSlice from './slices/cardSlices'





export const store = configureStore({
    reducer: {
        basket: basketSlice,
        restaurant: restaurantSlices,
    },
})