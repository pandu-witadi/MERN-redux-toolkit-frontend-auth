//
//
import { configureStore } from '@reduxjs/toolkit'

import authReducer from "./feature/authSlice"
// import messageReducer from "./slices/message"


export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
