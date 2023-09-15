import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SlideBasket from './component/SlideBasket';
import { ShoppingProvider } from './Context/UseShoppingContext';
import Payement from './pages/Payement';
import './App.scss'


function App() {
  

  return (
    < ShoppingProvider>
    <div className="App">
    <Navbar />
    <SlideBasket />
     <Container className='mb-4'>
      <Routes>
        <Route path='/' element= { <Home />}></Route>
        <Route path='/Store' element={<Store />}></Route>
        <Route path='/About' element= { <About />}></Route>
        <Route path='/Payement' element= { <Payement />}></Route>

      </Routes>
     </Container>
      
     <Footer /> 
     </div>
     </ShoppingProvider>
  )
}

export default App
