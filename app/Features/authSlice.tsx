import {createSlice, current} from '@reduxjs/toolkit'

interface authState{
    email:any
}
const existingUser = JSON.parse(localStorage.getItem('user'))

const initialState:authState = {
    email: existingUser?existingUser:null
}


        
        

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state:any,action:any)=>{
            // const {email} = action.payload;
            
            state.email = action.payload;
           
            let userData = JSON.stringify(action.payload)
            localStorage.setItem('user',userData)
        },
        logOut:(state:any,action:any)=>{
            state.email = null;
        }
    }
    
})
export default authSlice.reducer;
export const {login,logOut} = authSlice.actions;