import React, { useReducer, useContext, createContext } from 'react';
// store
import initialStore from './store';
// Reducer
import globalReducer from '../Reducer/reducer';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

export const GlobalProvider = ({ children }) => {
    const { state, dispatch } = useReducer(globalReducer, initialStore);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

// Custom hooks to use state & dispatch
export const useGlobalState = () => useContext(GlobalStateContext);

export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
