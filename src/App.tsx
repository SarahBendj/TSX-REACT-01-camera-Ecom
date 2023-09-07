import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './component/Navbar';
import './App.scss'


function App() {
  

  return (
    <div className="App">
    <Navbar />
     <Container className='mb-4'>
      <Routes>
        <Route path='/' element= { <Home />}>Home</Route>
        <Route path='/Store' element={<Store />}>store</Route>
        <Route path='/About' element= { <About />}>About</Route>

      </Routes>
     </Container>
     </div>
  )
}

export default App
