
import './App.css';
import Home from './pages/Home';
import Login from './pages/login';
import BlogsCreate from './pages/BlogsCreate';
import BlogsEdit from './pages/BlogsEdit';
import BlogsList from './pages/BlogsList';
import BlogsView from './pages/BlogsView';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/blogs' element={<BlogsList/>}></Route>
      <Route path='/blogs/create' element={<BlogsCreate/>}></Route>
      <Route path='/blogs/:id/view' element={<BlogsView/>}></Route>
      <Route path='/blogs/:id/edit' element={<BlogsEdit/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
