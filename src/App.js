import './App.css';
import DispatchAction from './customRedux/components/helperFunctions/DispatchAction';
import { currencyExchange, decrementCount, incrementCount } from './customRedux/components/mainFunctions/Actions';
import Selector from './customRedux/components/helperFunctions/Selector';
import axios from 'axios';
import HelloKitty from 'amith-hello-kitty';
;

function App() {

  const [state, updateState] = Selector({ printLog: true });

  const handleIncrement = () => {
    DispatchAction(incrementCount(state.INCERMENT, updateState));
  }

  const handleDecrement = () => {
    DispatchAction(decrementCount(state.DECREMENT, updateState));
  }

  const handleCurrencyExchange = (data) => {
    DispatchAction(currencyExchange(data, updateState));
  }

  const loadData = () => {
    const options = {
      method: 'GET',
      url: 'https://currency-exchange.p.rapidapi.com/listquotes',
      headers: {
        'X-RapidAPI-Key': 'bfc1c2e7d6msh4378ffc7c0bb67bp11a07ajsn949cfd2d1909',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      // console.log(response.data);
      handleCurrencyExchange(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div id="counter-app" style={{ alignItems: 'center' }}>
        <HelloKitty/>
        <div style={{ display: 'flex' }}>
          <div id="display-container" className="container">
            <p id="display">{state.INCERMENT}</p>
          </div>

          <div id="display-container" className="container">
            <p id="display">{state.DECREMENT}</p>
          </div>
        </div>

        <div id="buttons-container" className="container">
          <button id="increment-button" className="button" onClick={handleIncrement}><i className="fa fa-plus" style={{ fontSize: "24px" }}></i></button>
          <button id="decrement-button" className="button" onClick={handleDecrement} ><i className="fa fa-minus"></i></button>
          <button id="reset-button" className="button" onClick={loadData}><i className="fa fa-refresh"></i></button>
        </div>
      </div>

    </div>
  );
}

export default App;
