import React from 'react';

function createStore() {

    // Creating the context object and passing the default values.

    const rootContext = React.createContext();
    return rootContext;
}

export default createStore