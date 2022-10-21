import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import RB from './Rb';

import './App.css';

function callApi(item, r, g, b) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ r: r, g: g, b: b })
  };
  fetch('http://172.17.0.1:8001/neopixel/'+item, requestOptions)
    .then(response => response.json())
}

function App() {
  return (
    <>
    <RB item="0"/>
    <RB item="1"/>
    <RB item="2"/>
    <RB item="3"/>
    <RB item="4"/>
    <RB item="5"/>
    <RB item="6"/>
    <RB item="7"/>
    <RB item="8"/>
    <RB item="9"/>
    <RB item="10"/>
    <RB item="11"/>
    <RB item="12"/>
    <RB item="13"/>
    <RB item="14"/>
    <RB item="15"/>
    <RB item="16"/>
    <RB item="17"/>
    <RB item="18"/>
    <RB item="19"/>
    <RB item="20"/>
    <RB item="21"/>
    <RB item="22"/>
   </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <div>
//         <span>0 - </span>
//         <button style={{backgroundColor: "red"}} onClick={() => callApi(0, 255, 0, 0)}>&nbsp;</button>
//         <button style={{backgroundColor: "green"}} onClick={() => callApi(0, 0, 255, 0)}>&nbsp;</button>
//         <button style={{backgroundColor: "blue"}}onClick={() => callApi(0, 0, 0, 255)}>&nbsp;</button>
//       </div>
//       <div>
//         <span>1 - </span>
//         <button style={{backgroundColor: "red"}} onClick={() => callApi(1, 255, 0, 0)}>&nbsp;</button>
//         <button style={{backgroundColor: "green"}} onClick={() => callApi(1, 0, 255, 0)}>&nbsp;</button>
//         <button style={{backgroundColor: "blue"}}onClick={() => callApi(1, 0, 0, 255)}>&nbsp;</button>
//       </div>
//     </div>
//   );
// }

export default App;
