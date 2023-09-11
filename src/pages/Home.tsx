import Welcome from "../component/Welcome";
import HomeStoreSection from "../component/HomeStoreSection";
import HomeBlogSection from "../component/HomeBlogSection";
import HomeSoldItem from "../component/HomeSoldItem";
import Footer from '../component/Footer';

const Home = () => {
    return (
        <div>
            Home
            < Welcome /> 
            <div className='bg-white  shadow-sm mb-4' ></div>
           < HomeStoreSection />
           <div className='bg-white  shadow-sm mb-4' ></div>
           < HomeBlogSection />
           <div className='bg-white  shadow-sm mb-4' ></div>
           <HomeSoldItem />
         
            <Footer /> 
        </div>
    );
};

export default Home;