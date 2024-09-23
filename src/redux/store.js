import { configureStore } from '@reduxjs/toolkit';
import testReducer from './features/'


export const store = configureStore({
    reducer:{
        test: testReducer,
    }
})