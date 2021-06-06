import React,{createContext,useContext,useReducer} from "react"

//prepare the data layer
export const StateContext=createContext();

//wrap our app and provide the datalayer to all components in the app
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//pull the information to the datalayer
export const useStateValue=()=> useContext(StateContext);