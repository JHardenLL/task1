import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react';
 import App from './pages/App';
 import Hook from './pages/App';
 const container = document.getElementById('root');

 if(container) {
     const root = createRoot(container);
     root.render(<App/>);
 }


ReactDOM.render(<Hook/>,document.getElementById('root'));

// function funbutton() {
//   document.getElementById('text1').value='';
//   document.getElementById('text2').value='';
  
//   const container = document.getElementById('root');

//   if(container) {
//       const root = createRoot(container);
//       root.render(<App/>);
//   }
// }

// funbutton();