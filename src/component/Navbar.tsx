import {Navbar as NavBootstrap , Container , Nav , Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SlideBasket from './SlideBasket';
import { useState } from 'react';
import { UseShoppingContext } from '../Context/UseShoppingContext';
import LOGO from '../../public/images/CAPTURA.png';


const Navbar = () => {
    const { cartItems , cartTotal } = UseShoppingContext();

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
                    <div className="logo-container">
                 <h1 className="logo-name"  style={{paddingLeft: '4rem'}}> CAPTURA</h1>
                 <img src={LOGO} alt={`Picture of ${LOGO}`} className='logo' />
                 </div>
                   <Nav.Link to="/"  as={NavLink} > <h2>Home</h2></Nav.Link>

                   <Nav.Link to="/about"  as={NavLink} ><h2>About</h2> </Nav.Link>

                   <Nav.Link to="/Store"  as={NavLink} ><h2>Store</h2></Nav.Link>
                 </Nav>
                 <Button 
                 
                 onClick={handleSlideBasketOPEN}
                 style={{ background : '#DAA520' ,fontSize:'1.6rem' , position:'relative'}} 
                 className='border-0'>  
                 <div className='style-cart-total'>{ cartTotal} </div>
                 <FontAwesomeIcon  icon={faShoppingCart} /> Shop!</Button>
                 < SlideBasket isBasketShowed={isBasketShowed}  handleSlideBasketCLOSE={ handleSlideBasketCLOSE }  /> 
                  </Container>
            
        </NavBootstrap>
    );
};

export default Navbar;