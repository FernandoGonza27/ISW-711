import logo from './logo.svg';
import './App.css';
import useFetch from './components/hooks/useFetch';

import { useState } from 'react';

function App() {
  const [currencySelect, setCurrencySelect] = useState("")
  const {data,loading,error} = useFetch("http://localhost:3333/countrys");
  const {dataCurrency,loadingCurrency,errorCurrency} = useFetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencySelect}.json`);
  

  const handleInputChangeMoney =({ target: { value } }) =>{    
    setCurrencySelect(value.toLowerCase());
    console.log(currencySelect);
    console.log(JSON.stringify(dataCurrency));
    
  }

  const GetValuesOfMoney = () =>{
   
  }
  return (
    <div className="App">     
      <div className="App-header">
        {loading ?  ("Loading please wait"):(
          <div>
            <header>
          Worshop1
          </header>
          <div>          
            <h2>Tipo de cambio</h2>
            <form>
              <label>
                Usd:
                <h2 id="labelUsd">0</h2>
              </label>
              <label>
                Eur:
                <h2 id="labelEur">0</h2>
              </label>            
          </form>
          </div>
          <div>
            
            <label>List of countrys</label>
            <select onChange={handleInputChangeMoney}>
              {data.map((dpto,index) => { 
                return(
                  <option key={index} value={dpto.currencyCode}>
                  {dpto.countryName}
                </option>
                )
              })}
            </select> 
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
