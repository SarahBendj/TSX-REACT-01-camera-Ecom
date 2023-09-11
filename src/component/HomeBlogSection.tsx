import blogData from "../data/blogs.json";
import pictureData from '../data/pictures.json'
import { Card } from "react-bootstrap";
import RevealCompnenet from "../hooks/Reveal";

const HomeBlogSection = () => {
  console.log(pictureData)

    const NewArrayOfBlogsShowingOnHome = blogData.slice(0,2);
  return (
    <div className="SECTION"> 

      <h2 className="SECTION-title">Boost your Carrer!</h2>

      <div className=" SECTION-content d-flex direction-row">
        <div className="" style={{ width : '65%'}}>
      <div className="best-seller  ">
      Capture the Best Moments of the Year with Captura! Unlock the power of
      photography with our handpicked selection of the year's best cameras.
      From stunning landscapes to unforgettable portraits, these cameras have
      proven themselves as the go-to choice for both amateur and professional
      photographers. Discover the perfect tool to freeze time and create
      memories that last a lifetime.
      <div className="blog-pictures">
        {pictureData.map((i)=> (
          <img style={{ }} key={i.id} src={i.img}  />
        ))}
      </div>
    </div>
    </div>
   
    <div >
      {" "}
      <h2 className="best-seller-header">Most visited blogs!</h2>
      <div className="best-seller">
        Capture the Best Moments of the Year with Captura! Unlock the power of
        photography with our handpicked selection of the year's best cameras.
        From stunning landscapes to unforgettable portraits, these cameras have
        proven themselves as the go-to choice for both amateur and professional
        photographers. Discover the perfect tool to freeze time and create
        memories that last a lifetime.
    

      {NewArrayOfBlogsShowingOnHome.map((blog) => (

        <Card className="my-3" style={{ position: "relative" }}>
        <Card.Body>
          <Card.Title>
            <RevealCompnenet width="fit-content">
              <div>
                <h4 className="mb-2 border-bottom" style={{ color: "#842E1B" }}>
                  {blog.title}
                </h4>
              </div>
            </RevealCompnenet>
            <div>
              <p className="text-muted">
                <RevealCompnenet width="fit-content">
                  {" "}
                  <h5 className="mr-2">{blog.author}</h5>{" "}
                </RevealCompnenet>
                <RevealCompnenet width="fit-content">
                  {" "}
                  <h6>{blog.date}</h6>{" "}
                </RevealCompnenet>
              </p>
            </div>
          </Card.Title>
          <RevealCompnenet width="fit-content">
            {" "}
            <Card.Text className="my-4">{blog.content}</Card.Text>{" "}
          </RevealCompnenet>
        </Card.Body>
        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
       
        </div>
      </Card>

    ))}
      </div>
    </div>
    </div>
    </div> 
  );
};

export default HomeBlogSection;
