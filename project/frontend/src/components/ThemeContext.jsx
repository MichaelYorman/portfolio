import {createContext,useContext,useState} from "react";
import defaultmode from "../themes/defaultmode.json"
import nightmode from "../themes/defaultmode.json"
import { setCookie,getCookie,checkCookie,deleteCookie } from "./Cookies";

const ThemeContext=createContext();

function ThemeProvider({children}) {
    let cookie=checkCookie("theme")
    //if no cookie is found, set default cookie to "defaultmode"
    if(!cookie) {cookie="defaultmode"}
    const[theme,setTheme]=useState(cookie);

    const themes  = {
        defaultmode,nightmode,
    }
    const s=(key)=>themes[theme][key] || key;
    return (
         <ThemeContext.Provider value={{theme,setTheme,s}}>
        {children}
    </ThemeContext.Provider>
    )
}
function useTheme() {
    return useContext(ThemeContext);
}

export {ThemeProvider,useTheme};