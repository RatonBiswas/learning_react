import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Hello from './myComponents/Hello'
// import Welcome from './myComponents/Welcome'
// import MyBootstrap from './myComponents/Bootstrap'
// import ReactState from './myComponents/ReactState'
// import ReactSetState from './myComponents/setState'
// import MyConditon from './myComponents/ConditionalIf'
// import Refresh from './myComponents/Refresh'ReactDOM_Render
// import FindDomNode from './myComponents/FindDomNode'
  //  import SelectOption from './myComponents/SelectOption'
  //  import List from './myComponents/List'
   import JsonList from './myComponents/JsonList'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Raton Nana.
        </p>
        <a
          className="App-link"
          href="https://github.com/RatonBiswas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raton Nana
        </a>
      </header> */}

      {/* <Hello age = "18" name = "Raton Nana"></Hello> */}
      {/* <Hello age = "21" name = "Laksham Gope"></Hello>
      <Hello age = "22" name = "Emon Aurko"></Hello>
      <Hello age = "27" name = "Forhan Islam"></Hello> */}

      {/* <Welcome location = "cumilla"  name = "Forhan Islam"></Welcome> */}
      {/* <Welcome location = "Chandpur" name = "Raton Biswas"></Welcome> */}
      {/* <MyBootstrap></MyBootstrap>
      <ReactState></ReactState> */}
      <JsonList/>

    </div>
  );
}

export default App;
