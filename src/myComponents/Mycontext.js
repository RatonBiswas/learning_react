import React from 'react';


const MyContext = React.createContext();
const AppProvider = MyContext.Provider
const ReceiveConsumer = MyContext.Consumer;

export { AppProvider,ReceiveConsumer }