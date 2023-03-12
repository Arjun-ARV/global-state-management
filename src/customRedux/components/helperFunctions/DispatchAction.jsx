import * as actions from '../mainFunctions/Actions';

function DispatchAction({ actionName, value, type,store }) {
    store.updateState(prevState =>({...prevState,[type]:actions[actionName](value)}))
}

export default DispatchAction