import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Addcontact from './components/Addcontact';
import Editcontact from './components/Editcontact';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='App'>
    <ToastContainer/>
    <Navbar/>
  <Routes>
  <Route exact path='/' element={<Home/>}/>
    <Route exact path='/add' element={<Addcontact/>}/>
    <Route exact path='/edit/:id' element={<Editcontact/>}/>
  </Routes>
    </div>
  );
}

export default App;
