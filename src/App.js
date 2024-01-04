import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Char from './components/Char';
import { Routes,Route } from 'react-router-dom';
import Waifu from './components/Waifu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Char' element={<Char/>}/>
       <Route path='/Waifu' element={<Waifu/>}/>
      </Routes>
    </div>
  );
}

export default App;
