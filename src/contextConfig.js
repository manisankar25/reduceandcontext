import { useContext, createContext, Children } from "react"

const CounterContext = createContext();


export const CounterContactProvider = ({intialState,reducer,Children})=>{
    return(
        <CounterContext.Provider value={{intialState,reducer}} >{Children}</CounterContext.Provider>
    )
}
