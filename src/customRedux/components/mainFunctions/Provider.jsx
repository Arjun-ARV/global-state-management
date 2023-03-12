import { useState } from "react"
import Types from "./Types";

function Provider({ children, rootContext }) {
    const [state, setState] = useState(Types);

    return (
        <rootContext.Provider value={{ state: state, updateState: setState }}>
            {children}
        </rootContext.Provider>
    )
}

export default Provider