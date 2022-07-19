import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import React from 'react';
import {Counter} from './features/counter/Counter';
import { useGetPokemonByNameQuery } from './services/pokemon';
import store from './app/store';


function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}
//   const [userName, setUserName]= useState('');
//   const [displayName, setDisplayName]= useState('');



//   useEffect(() => { 
//     setDisplayName('Sample name');
//       },[]);
  
//   useEffect(() => { 
//     if(userName){
//       setDisplayName(userName);
//     }
//   },[userName]); 
      
//   const onChange=(value)=>{
//     setUserName(value);
//   }
      
//   const onClick=() =>{
//     const val=prompt('Enter your name');
//     console.log(val);
  
//   };
//   return (
//     <div className="App">
      
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//       {/* <div>
//         <h2>
//           Home
//         </h2>
//         <button onClick={onClick}>open </button>
//       </div> */}

//       {/* <h2>
//         Home
//       </h2>
//       <InputField label="User Name" onchange={onChange}/> */}
//       {/* <InputField label="Password"/>

//       <Button label="Login" handleClick={()=> {}} /> */}
//       {/* {displayName && <h2>hello {displayName}</h2>} */}
      

//     </div>
//   );
// }

export default App;
