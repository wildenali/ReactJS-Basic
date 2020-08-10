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


// --------------------- 2 - Button dan element basic ---------------------
import React from 'react';
import './App.css';

function App() {

  const judul = "Ini Judul"

  const handlePencet = (e) => {
    console.log('Di pencet')
  }
  
  return (
    <div className="App">
      <h1>{judul}</h1>
      <button onClick={handlePencet}>Pencet</button>
    </div>
  );
}
export default App;
// --------------------- 2 - Button dan element basic ---------------------