 // import Home from "./Components/Home"
// import About from "./Components/About"
// import NavBar from "./Components/NavBar"
// import Contact from "./Components/Contact"
// import { BrowserRouter, Route,Routes,Navigate } from "react-router-dom";
// import Page404 from "./Components/Page404"
import { useState } from "react";
import "./App.css";




  // INCREMENT AND DECREMENT FUNCTION
function App() {
  const [count, setCount] = useState(0);

  function addValue() {
    // const addValue = ()=>{
    // console.log(count);
    setCount(count + 1);
   
  }
// }
  function removeValue() {
   
    // if (count > 0) {
      setCount(count - 1);
    // }
  }

  return (
    <div className="center">
      <h1 className="center">Counter value: {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;















// import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
// import Home from './Components/Home';
// import About from './Components/About';
// import NavBar from './Components/NavBar';
// import Page404 from "./Components/Page404";


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user/:name" element={<User />} />
//           <Route path="/*" element={<Navigate to="/" />} />
//           <Route path="/filter" element={<Filter />} />
//           <Route path="/contact/" element={<Contact />}>
//           <Route path="company" element={<Company />} />
//           <Route path="channel" element={<Channel />} />
//           <Route path="other" element={<Other />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
        
       
     







