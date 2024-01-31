
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import  Home  from './pages/Home';
import { Whishlist } from './pages/Whishlist';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/whishlist' element={<Whishlist/>} />

     </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
