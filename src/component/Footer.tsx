
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-regular-svg-icons';
import { faInstagram}  from '@fortawesome/free-regular-svg-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
      <div className='bg-white ' style={{width: '100vw' }}  >
          <Container className=''>
        <div className="footer-payement-methodes"></div>
        <div className="footer-service-client">
            <div className="footer-item-title"> </div>
            <ul>
                <li>Help</li>
                <li>Refound</li>
                <li>Shipping</li>
                <li>Delivery</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer-social-media">
        {/* <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} /> */}
        </div>
        <div className="footer-language"></div>
        <div>
           <div>2023 CameraOn</div> 
           <div>Condition Generales de vente</div>
           <div></div>
            
        </div>
        </Container>
        </div>
        
    );
};

export default Footer;