import {Navbar as NavBootstrap , Container , Nav , Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <NavBootstrap className='bg-white  shadow-sm mb-4'>
            <Container>
                 <Nav className='me-auto'>
                   <Nav.Link to="/"  as={NavLink} > <h2>Home</h2></Nav.Link>

                   <Nav.Link to="/about"  as={NavLink} ><h2>About</h2> </Nav.Link>

                   <Nav.Link to="/Store"  as={NavLink} ><h2>Store</h2></Nav.Link>
                 </Nav>
                 <Button style={{ background : '#DAA520' ,fontSize:'1.6rem'}} className='border-0'> Shop!</Button>
                  </Container>
            
        </NavBootstrap>
    );
};

export default Navbar;