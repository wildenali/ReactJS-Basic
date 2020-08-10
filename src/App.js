// // --------------------- 1 Basic Template ---------------------
// import React from 'react';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <h1>Test 123</h1>
//     </div>
//   );
// }
// export default App;
// // --------------------- 1 Basic Template ---------------------


// // --------------------- 2 - Button dan element basic ---------------------
// import React from 'react';
// import './App.css';
// function App() {
//   const judul = "Ini Judul"
//   const handlePencet = (e) => {
//     console.log('Di pencet')
//   }
//   return (
//     <div className="App">
//       <h1>{judul}</h1>
//       <button onClick={handlePencet}>Pencet</button>
//     </div>
//   );
// }
// export default App;
// // --------------------- 2 - Button dan element basic ---------------------


// // --------------------- 3 - CSS basic in React ---------------------
// import React from 'react';
// import './App.css';
// function App() {
//   const judul = "Ini Judul"
//   const handlePencet = (e) => {
//     console.log('Di pencet')
//   }
//   return (
//     <div className="App">
//       <h1 style={{color: 'red', textAlign:'right'}}>{judul}</h1>
//       <button onClick={handlePencet}>Pencet</button>
//     </div>
//   );
// }
// export default App;
// // --------------------- 3 - CSS basic in React ---------------------


// // --------------------- 4 - Component dan Props ---------------------
// import React from 'react';
// import './App.css';

// function App(props) {

//   console.log(props)

//   return (
//     <div className="App">
//       <h1>Heeey ini {props.nama}</h1>
//     </div>
//   );
// }

// export default App;
// // --------------------- 4 - Component dan Props ---------------------


// --------------------- 5 - props.children ---------------------
import React from 'react';
import './App.css';
import E_Header from './E_Header'

function App(props) {

  console.log(props)

  return (
    <div className="App">
      <E_Header>{props.nama}</E_Header>
      <h1>Heeey ini</h1>
    </div>
  );
}

export default App;
// --------------------- 5 - props.children ---------------------