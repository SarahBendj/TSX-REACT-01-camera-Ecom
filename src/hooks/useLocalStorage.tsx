import { useEffect, useState } from "react";

//*Prevent referesh event 
export default function useLocalStorage<T> (key: string, initValue : T | (()=> T) ){
    const [value, setValue] = useState<T>(()=> {
        const jsonValue = localStorage.getItem(key)
        
        if(jsonValue != null) return JSON.parse(jsonValue)

        if( typeof initValue === 'function') {
            return (initValue as () => T )();
        } else {
            return initValue
        }
    })

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, setValue])
    return [ value, setValue] as [ typeof value , typeof setValue]

}