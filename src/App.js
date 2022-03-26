import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard/Dashboard';
import Career from './Career/Career';
import Blog from './Blog/Blog';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/career' element={<Career/>} />
      <Route path='/blog' element={<Blog/>} />
    </Routes>   
  </Router>
  );
}

export default App;
