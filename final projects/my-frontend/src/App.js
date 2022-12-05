// import './App.css';
// //import Addcilent from './Components/Addcilent';
// import UserActionApp from './Components/Cilentaction';
// //import CilentactionApp from "./Components/Cilentaction";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <UserActionApp/>
       
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Cilentaction from './Components/Cilentaction';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
       <Route path='/Login' element={<Cilentaction className='App-header'/>} />
      <Route path='/' element={<Login/>} />
       </Routes>
  
      </header>
    </div>
  );
}

export default App;
