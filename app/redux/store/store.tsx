import authSlice from '@/app/Features/authSlice';
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '@/app/Features/authSlice';

export default configureStore({
    reducer:{
        auth: authReducer,
        
    }
})
