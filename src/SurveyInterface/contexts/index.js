import React from 'react'
import RootStore from '../Stores/rootStore';

//custom root store
export const storesContext = React.createContext({
    rootStore: new RootStore(null),
})