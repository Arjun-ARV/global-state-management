import { useContext, useEffect } from 'react';
import './App.css';
import rootContext from './customRedux/components/mainFunctions/Store';
import DispatchAction from './customRedux/components/helperFunctions/DispatchAction';
import { incrementCount } from './customRedux/components/mainFunctions/Actions';

function App() {

  const store = useContext(rootContext);

  const handleIncrement = () => {
    DispatchAction(incrementCount({
      count: 10,
      sum: store?.state?.INCERMENT
    }));
  }

  useEffect(() => {
    console.log('store : ', store?.state)
  }, [store?.state])


  return (
    <div id="counter-app" style={{ alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <div id="display-container" className="container">
          <p id="display">{store?.state?.INCERMENT}</p>
        </div>

        <div id="display-container" className="container">
          <p id="display">{store?.state?.INCERMENT}</p>
        </div>
      </div>

      <div id="buttons-container" className="container">
        <button id="increment-button" className="button" onClick={handleIncrement}><i className="fa fa-plus" style={{ fontSize: "24px" }}></i></button>
        <button id="decrement-button" className="button" ><i className="fa fa-minus"></i></button>
        <button id="reset-button" className="button" ><i className="fa fa-refresh"></i></button>
      </div>
    </div>
  );
}

export default App;
