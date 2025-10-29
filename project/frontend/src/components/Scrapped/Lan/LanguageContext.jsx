/*
import {createContext,useContext,useState} from "react";
import en from "../translation/locales/en/translation.json";
import fi from "../translation/locales/fi/translation.json";
import {setCookie,getCookie,checkCookie,deleteCookie} from "./Cookies/Cookies"

const LanguageContext=createContext();

function LanguageProvider({children}) {
    let cookie=checkCookie("language")
    //if no cookie is found, set default cookie to "en"
    if (!cookie) {cookie="en"}
    const[lang,setLang]=useState(cookie);

    //translation available
    const translations = {
        en,fi
    }
    const t=(key)=>translations[lang][key] || key;

return (
    <LanguageContext.Provider value={{lang,setLang,t}}>
        {children}
    </LanguageContext.Provider>
)
}

function useTranslate() {
    return useContext(LanguageContext);
}

export {LanguageProvider,useTranslate}
*/