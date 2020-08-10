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


// // --------------------- 5 - props.children ---------------------
// import React from 'react';
// import './App.css';
// import E_Header from './E_Header'

// function App(props) {

//   console.log(props)

//   return (
//     <div className="App">
//       <E_Header>{props.nama}</E_Header>
//       <h1>Heeey ini</h1>
//     </div>
//   );
// }

// export default App;
// // --------------------- 5 - props.children ---------------------


// // --------------------- 6 - State dan useState Hook ---------------------
// import React, { useState } from 'react';
// import './App.css';

// function App() {

//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <h1>Ini useState</h1>
//       <p>Coba Berhitung: {count}</p>
//       <button onClick={e=>setCount(count+1)}>Pencet Dong</button>
//     </div>
//   );
// }

// export default App;
// // --------------------- 6 - State dan useState Hook ---------------------


// // --------------------- 7 - useEffect Hook for SideEffect ---------------------
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {

//   const [post, setPost] = useState({})
//   const [postId, setPostId] = useState(1)
//   useEffect(() => {
//     const fetchPost = async () => {
//       const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`);
//       const post = await res.json();
//       console.log(post);
//       setPost(post);
//     }
//     fetchPost();
//   },[postId])

//   return (
//     <div className="App">
//       <h1>Ini useState</h1>
//       <p>Coba Berhitung: {postId}</p>
//       <button onClick={e=>setPostId(postId+1)}>Pencet Dong</button>

//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

// export default App;
// // --------------------- 7 - useEffect Hook for SideEffect ---------------------


// --------------------- 8 - Conditional Rendering ---------------------
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [post, setPost] = useState({})
  const [postId, setPostId] = useState(1)
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`);
      const post = await res.json();
      console.log(post);
      setPost(post);
      setIsFetching(false);
    }
    fetchPost();
  },[postId])

  // Cara Pertama
  // if (isFetching) {
  //   return <h1>Bentar woy...</h1>
  // }

  return (
    <div className="App">
      <h1>Ini useState</h1>
      <p>Coba Berhitung: {postId}</p>
      <button onClick={e=>setPostId(postId+1)}>Pencet Dong</button>

      {/* Cara Kedua pakai Tenary */}
      {/* {
        isFetching ? (
          <h1>Sabaar dong...</h1>
        ) : (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )
      } */}

      {/* Cara Ketiga pakai AND Operator */}
      {isFetching && <h1>Sabaar woooy...</h1> }
      {!isFetching &&
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      }
    </div>
  );
}


export default App;
// --------------------- 8 - Conditional Rendering ---------------------