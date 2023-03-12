const incrementCount = (sum, updateState) => {
    return {
        type: 'INCERMENT',
        payload: sum + 10,
        updateState: updateState
    };
}

const decrementCount = (sum, updateState) => {
    return {
        type: 'DECREMENT',
        payload: sum - 10,
        updateState: updateState
    };
}

const currencyExchange = (data, updateState) => {
    return {
        type: 'CURRENCY',
        payload: data,
        updateState: updateState
    };
}

export { incrementCount,decrementCount,currencyExchange }