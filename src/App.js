import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'
import LogIn from './components/LogIn';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
        <Route path='/' element={<Products />}/>
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/update/:id' element={<UpdateProduct />}/>
        <Route path='/profile' element={<h1>profile</h1>}/>
        </Route>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<LogIn />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
