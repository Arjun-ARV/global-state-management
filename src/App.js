import { useContext, useEffect } from 'react';
import './App.css';
import rootContext from './customRedux/components/mainFunctions/Store';
import DispatchAction from './customRedux/components/helperFunctions/DispatchAction';

function App() {

  const store = useContext(rootContext);

  const handleIncrement = () => {
    DispatchAction({
      actionName: 'incrementCount',
      value: { count: 10, sum: store?.state?.incrementType },
      type: 'incrementType',
      store: store
    });
  }

  const handleDecrement = () => {
    DispatchAction({
      actionName: 'decrementCount',
      value: { count: 10, sum: store?.state?.decrementType },
      type: 'decrementType',
      store: store
    });
  }

  const handleReset = () => {
    DispatchAction({
      actionName: 'resetCount',
      value:0,
      type: 'incrementType',
      store: store
    });

    DispatchAction({
      actionName: 'resetCount',
      value:0,
      type: 'decrementType',
      store: store
    });
  }

  useEffect(() => {
    console.log('store : ', store?.state)
  }, [store?.state])

  return (
    <div id="counter-app" style={{ alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <div id="display-container" className="container">
          <p id="display">{store?.state?.incrementType}</p>
        </div>

        <div id="display-container" className="container">
          <p id="display">{store?.state?.decrementType}</p>
        </div>
      </div>

      <div id="buttons-container" className="container">
        <button id="increment-button" className="button" onClick={handleIncrement}><i className="fa fa-plus" style={{ fontSize: "24px" }}></i></button>
        <button id="decrement-button" className="button" onClick={handleDecrement}><i className="fa fa-minus"></i></button>
        <button id="reset-button" className="button" onClick={handleReset}><i className="fa fa-refresh"></i></button>
      </div>
    </div>
  );
}

export default App;
