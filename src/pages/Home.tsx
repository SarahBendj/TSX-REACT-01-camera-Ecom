
import HomeStoreSection from "../component/HomeStoreSection";
import HomePicturesSection from "../component/HomePicturesSection";
import HomeBlogSection from "../component/HomeBlogsSection";
import HomeSoldItem from "../component/HomeSoldItem";


const Home = () => {
    return (
        <div >
          
            <div className='bg-white  shadow-sm mb-4' >
           < HomeStoreSection />
           </div>
           <div className='bg-white  shadow-sm mb-4' >
           < HomePicturesSection />
           </div>
           <div className='bg-white  shadow-sm mb-4' >
           < HomeBlogSection />
           </div>
           <div className='bg-white  shadow-sm mb-4' >
           <HomeSoldItem />
           </div>
        
        </div>
    );
};

export default Home;