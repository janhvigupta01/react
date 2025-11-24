import {createContext,useState} from "react"
export const AppContext = createContext();

const AppContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")
return(
    <AppContext.Provider value={{theme,setTheme}}>
        {children}
        </AppContext.Provider>
)
}
export default AppContextProvider