function DispatchAction({ type, payload, updateState }) {
    updateState(prevState => ({ ...prevState, [type]: payload }))
}

export default DispatchAction