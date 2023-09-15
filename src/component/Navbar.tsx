import {Navbar as NavBootstrap , Container , Nav , Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SlideBasket from './SlideBasket';
import { useState } from 'react';


const Navbar = () => {

    const [isBasketShowed, setIsBasketShowed] = useState<boolean | null>(null)

    const handleSlideBasketCLOSE = () : void => {
        setIsBasketShowed(false);
    };
    const handleSlideBasketOPEN = (): void => {
        setIsBasketShowed(true);
    };

    return (
        <NavBootstrap className='bg-white  shadow-sm mb-4'>
           
            <Container>
                 <Nav className=''>
                 <h1 className="LOGO"> CAPTURA</h1>
                   <Nav.Link to="/"  as={NavLink} > <h2>Home</h2></Nav.Link>

                   <Nav.Link to="/about"  as={NavLink} ><h2>About</h2> </Nav.Link>

                   <Nav.Link to="/Store"  as={NavLink} ><h2>Store</h2></Nav.Link>
                 </Nav>
                 <Button 
                 onClick={()=>{handleSlideBasketOPEN}}
                 style={{ background : '#DAA520' ,fontSize:'1.6rem'}} 
                 className='border-0'>  
                 <FontAwesomeIcon onClick={handleSlideBasketOPEN} icon={faShoppingCart} /> Shop!</Button>
                 < SlideBasket isBasketShowed={isBasketShowed}  handleSlideBasketCLOSE={ handleSlideBasketCLOSE }  /> 
                  </Container>
            
        </NavBootstrap>
    );
};

export default Navbar;