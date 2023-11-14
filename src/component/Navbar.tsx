import {
  Navbar as NavBootstrap,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SlideBasket from "./SlideBasket";
import React,{ useState } from "react";
import { UseShoppingContext } from "../Context/UseShoppingContext";
import LOGO from "../../public/images/CAPTURA.png";
import { useLocation } from "react-router-dom";
import NavMobileMenu from "./NavMobileMenuModal";


const Navbar = () => {
  const location = useLocation();

  const { cartTotal } = UseShoppingContext();
  const [isBasketShowed, setIsBasketShowed] = useState<boolean >(false);

  const handleSlideBasketCLOSE = (): void => {
    setIsBasketShowed(false);
  };
  const handleSlideBasketOPEN = (): void => {
    setIsBasketShowed(true);
  };

  return (
    <NavBootstrap className="bg-white  shadow-sm mb-4">
      <Container >
        <Nav className="navbar-mobile" style={{ paddingBottom: " 0.5rem" }}>
          <div className="logo-container">
            <h1
              className="logo-name special-title"
              style={{ paddingLeft: "4rem" }}
            >
              {" "}
              CAPTURA
            </h1>
            <img src={LOGO} alt={`Picture of ${LOGO}`} className="logo hidden-mobile" />
  
          </div>
          <div  className="menu-mobile">

          <Nav.Link to="/" as={NavLink} className="special-title nav-link">
            {" "}
            <h2>Home</h2>
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink} className="special-title nav-link">
            <h2>About</h2>{" "}
          </Nav.Link>

          <Nav.Link to="/Store" as={NavLink} className="special-title nav-link">
            <h2>Store</h2>
          </Nav.Link>
          </div>

          {/* //*IF MOBILE MODE THEN DO THIS  */}
          <NavMobileMenu >
              <Nav.Link to="/" as={NavLink} className="special-title nav-link">
            {" "}
            <h2>Home</h2>
          </Nav.Link>

          <Nav.Link to="/about" as={NavLink} className="special-title nav-link">
            <h2>About</h2>{" "}
          </Nav.Link>

          <Nav.Link to="/Store" as={NavLink} className="special-title nav-link">
            <h2>Store</h2>
          </Nav.Link> 
          </NavMobileMenu>
        </Nav>
        <Button
          onClick={handleSlideBasketOPEN}
          style={{
            background: "#DAA520",
            fontSize: "1.6rem",
            position: "relative",
          }}
          className="border-0"
        >
          {location.pathname === "/Payement" ? (
            <div className="style-cart-total special-title"  style={{ backgroundColor:'green'}}>  <FontAwesomeIcon icon={faCheck} />{" "}</div>
          ) : (
            <div className="style-cart-total special-title">{cartTotal} </div>
          )}
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <span className="special-title"> Shop!</span>{" "}
        </Button>
        <SlideBasket
          isBasketShowed={isBasketShowed}
          handleSlideBasketCLOSE={handleSlideBasketCLOSE}
        />
      </Container>
    </NavBootstrap>
  );
};

export default Navbar;
