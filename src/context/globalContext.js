import React, { useReducer, useContext, createContext } from 'react';
// store
import initialStore from './store';
// Reducer
import globalReducer from '../Reducer/reducer';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialStore);

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
};

// Custom hooks to use state & dispatch
export const useGlobalState = () => useContext(GlobalStateContext);

export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
