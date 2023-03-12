import { useContext, useEffect } from "react";
import rootContext from "../mainFunctions/Store";

function Selector({ printLog }) {

    const store = useContext(rootContext);

    useEffect(() => {
        if (printLog) {
            console.log('state : ', store.state)
        }
    }, [store?.state,printLog])

    return [store.state, store.updateState];
}

export default Selector