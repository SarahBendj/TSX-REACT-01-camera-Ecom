import {Navbar as NavBootstrap , Container , Nav , Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <NavBootstrap className='bg-white  shadow-sm mb-4'>
            <Container>
                 <Nav className='me-auto'>
                   <Nav.Link to="/"  as={NavLink} > Home</Nav.Link>

                   <Nav.Link to="/about"  as={NavLink} > About</Nav.Link>

                   <Nav.Link to="/Store"  as={NavLink} >Store</Nav.Link>
                 </Nav>
                 <Button> Shop!</Button>
                  </Container>
            
        </NavBootstrap>
    );
};

export default Navbar;