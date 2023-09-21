import Welcome from "../component/Welcome";
import HomeStoreSection from "../component/HomeStoreSection";
import HomePicturesSection from "../component/HomePicturesSection";
import HomeBlogSection from "../component/HomeBlogsSection";
import HomeSoldItem from "../component/HomeSoldItem";


const Home = () => {
    return (
        <div>
            Home
          
            <div className='bg-white  shadow-sm mb-4' ></div>
           < HomeStoreSection />
           <div className='bg-white  shadow-sm mb-4' ></div>
           < HomePicturesSection />
           <div className='bg-white  shadow-sm mb-4' ></div>
           < HomeBlogSection />
           <div className='bg-white  shadow-sm mb-4' ></div>
           <HomeSoldItem />
        
        </div>
    );
};

export default Home;