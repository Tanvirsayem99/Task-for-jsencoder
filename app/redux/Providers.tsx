"use client"

import store from "./store/store";



const { Provider } = require("react-redux");
interface childrenProps{
    children: React.ReactNode
}

export const  Providers: React.FC<childrenProps>=({children})=>{
    return <Provider store={store}>{children}</Provider>
}
