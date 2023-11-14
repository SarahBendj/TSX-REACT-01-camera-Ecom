import blogData from "../data/blogs.json";
import { Card } from "react-bootstrap";
import RevealComponent from "../hooks/Reveal";
import  { BlogProps }  from './BlogShape';
import { Link } from "react-router-dom";
import LikeNdislike from "./LikeNdislike";
import ImageLayer from "../../public/images/blog.webp";
import React from "react";


const HomeBlogsSection = () => {

    const NewArrayOfBlogsShowingOnHome : BlogProps[] = blogData.slice(0,2);
    return (
        <div className="SECTION">
        <h2 className="SECTION-title">Most visited blogs!</h2>
          <div className="SECTION-content ">
           
          <div className="hidden-mobile">
              <h4>
              Capture the Best Moments of the Year with Captura! Unlock the power of
        photography with our handpicked selection of the year's best cameras.
        From stunning landscapes to unforgettable portraits, these cameras have
        proven themselves as the go-to choice for both amateur and professional
        photographers. Discover the perfect tool to freeze time and create
        memories that last a lifetime.
              </h4>
              </div>
          <div className="show-mobile">
            <h4  style={{ marginBottom: '2rem'}}>
            Unlock the power
            of photography with our handpicked selection of the year's best
            cameras.
              </h4>
            
        </div>
              
              
      {" "}
    
      
    <div style={{position:'relative' }}><img src={ImageLayer} className='image-home-blogs'  style={{ borderRadius : "10px" , height: '70vh'}} />
      
      <div  className='home-blogs' > 
      {NewArrayOfBlogsShowingOnHome.map((blog) => (

        <Card key={blog.id} className="my-3" >
     
     <Link  style={{ color: 'gray', textDecoration: 'none' }} to='/about'>   <Card.Body className="blog-article">
          <Card.Title>
            <RevealComponent width="fit-content">
              <div>
                <h4 className="mb-2 border-bottom" style={{ color: "#842E1B" }}>
                  {blog.title}
                </h4>
              </div>
            </RevealComponent>
            <div>
              <p className="text-muted">
                <RevealComponent width="fit-content">
                  {" "}
                  <h5 className="mr-2">{blog.author}</h5>{" "}
                </RevealComponent>
                <RevealComponent width="fit-content">
                  {" "}
                  <h6>{blog.date}</h6>{" "}
                </RevealComponent>
              </p>
            </div>
          </Card.Title>
          <RevealComponent width="fit-content">
            {" "}
            <Card.Text className="my-4">{blog.content}</Card.Text>{" "}
          </RevealComponent>
        </Card.Body>  </Link> 
        <div  style={{ position:'absolute' , bottom: "0" , right:"0"}}>
      <LikeNdislike  />
      </div>
      </Card>


    ))}
    </div>
     </div>
      </div> 
    </div>
            
    
    );
};

export default HomeBlogsSection;