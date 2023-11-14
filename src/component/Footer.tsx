import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
      
    <div className="bg-white footer-wrapper" style={{ width: "100vw", textAlign: "center" }}>
      <div className="footer-container" >
        <div className="footer-service-client">
          <div>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>Aspernatur amet repudiandae mollitia soluta tenetur?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Explicabo saepe optio officiis natus facilis totam,</li>
            <li>nulla minus eius eum accusantium in sequi maiores quos</li>
            <li>Rate novos fuego maiores quos</li>
          </ul>
        </div>
        
          <div className="footer-item-title"> 
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>Help</li>
            <li>Refound</li>
            <li>Shipping</li>
            <li>Delivery</li>
            <li>Contact</li>
          </ul>
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
        
        </div>
        

        </div>
        <div className="footer-social-media">
          <SocialIcon url='www.facebook.com'/>
          <SocialIcon url='www.instagram.com'/>
          <SocialIcon url='www.linkedin.com'/>
          <SocialIcon url='www.twitter.com'/>
          <SocialIcon url='www.meetup.com'/>
    
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
