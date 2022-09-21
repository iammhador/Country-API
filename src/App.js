import React from "react";
import Countries from "./Components/Countries/Countries";

const App = () => {
  return (
    <div>
      <Countries></Countries>
    </div>
  );
};

export default App;

//Note: Countries Data Show Here ( Module : 46.1, 46.2)
// import logo from "./logo.svg";
// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <LoadCountries></LoadCountries>
//     </div>
//   );
// }

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting Every Country In The World</h1>
//       <h4>Total Country : {countries.length}</h4>
//       {countries.map((country) => (
//         <Country
//           name={country.name.official}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h2> {props.name}</h2>
//       <h3>Population : {props.population}</h3>
//     </div>
//   );
// }
// export default App;
