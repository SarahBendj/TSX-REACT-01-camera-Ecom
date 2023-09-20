import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    // <div className="footer-postion " style={{ position:'absolute' , bottom:'0' }}>
    <div className="bg-white d-flex direction-column justify-content-spacebetween" style={{ width: "100vw", textAlign: "center" }}>
      <div className="d-flex direction-row" >
        <div className="footer-payement-methodes">
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>Aspernatur amet repudiandae mollitia soluta tenetur?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Explicabo saepe optio officiis natus facilis totam,</li>
            <li>nulla minus eius eum accusantium in sequi maiores quos</li>
            <li>Rate novos fuego maiores quos</li>
          </ul>
        </div>
        <div className="footer-service-client">
          <div className="footer-item-title"> 
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>Help</li>
            <li>Refound</li>
            <li>Shipping</li>
            <li>Delivery</li>
            <li>Contact</li>
          </ul>
          </div>
        </div>
        <div className="footer-item-title">
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Blog</li>
        </ul>
        </div>

        <div className="footer-social-media">
          {/* <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} /> */}
        </div>
      </div>
    

      <div>
        <p>2023 CameraOn</p>
        <p>Condition Generales de vente</p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    
  );
};

export default Footer;
