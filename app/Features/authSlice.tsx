import {createSlice, current} from '@reduxjs/toolkit'

interface authState{
    email:any
}
type StorageData = {
    email:any
};
let currentData = ''
if (typeof window !== 'undefined') {
    const item:any = localStorage.getItem('user')
    
    const existingUser:any = JSON.parse(item) as StorageData;
    currentData = existingUser
}



const initialState:authState = {
    email: currentData?currentData:''
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
            state.email = '';
        }
    }
    
})
export default authSlice.reducer;
export const {login,logOut} = authSlice.actions;