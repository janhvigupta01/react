import {createContext,useState} from 'react'
export const AppContext=createContext();
const AppContextProvider=({children})=>{
    const [userName,setUserName]=useState("");
    return (
        <AppContext.Provider value={{userName,setUserName}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider



