// import WelcomingImage from "../../public/images/cameraMain.jpeg";
import WelcomingImage from "../../public/images/fontimage.jpeg";

const welcome = () => {
  return (
    <div
      className=" welcome-wrapper"
      style={{ width: "100vw", textAlign: "center" }}
    >
        <div className="welcome-image-container">
      <img
        className="welcome-image"
        src={WelcomingImage}
        alt="image of camera on an old map "
      />
      </div>
      <div className="welcome-text" >
        Welcome to our world of photography! At Captura, we're more than just a
        place to buy cameras; we're your partners in capturing life's most
        beautiful moments. Whether you're a seasoned professional or an
        enthusiastic beginner,  Welcome to your one-stop
        destination for all things photography!
      </div>
    </div>
  );
};

export default welcome;
