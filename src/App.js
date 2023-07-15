import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />


      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
