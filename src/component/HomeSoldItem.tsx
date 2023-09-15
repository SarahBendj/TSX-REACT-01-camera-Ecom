import StoreItemsData from "../data/items.json";
import { Card , Button } from "react-bootstrap";
import RevealCompnenet from "../hooks/Reveal";
const HomeSoldItem = () => {
   const ItemSold =StoreItemsData[19]
    return (
      <div className="SECTION">
        <div className="SECTION-sold sold">
       <h1> 35 % off</h1>
       <h2> Free shipping</h2>
       <h2> Paying by parts </h2>
       <h2> 3years garantee</h2>
       <h2> Offer expires on  <span> <h4> 30/11/2023</h4></span> </h2>
      </div> 
        
        <Card id={ItemSold.id}  >
            <div className="best-seller">
      <RevealCompnenet><Card.Img
        
        variant="top "
        src={ItemSold.img}
        height="400px"
        style={{ objectFit: "cover" }}
      /></RevealCompnenet>
   <Card.Body className="bg-transparent" >
   <RevealCompnenet>      <Card.Title className="d-flex justify-content-space-between align-items-baseline">
        
          <RevealCompnenet> <span className="fs-2">{ItemSold.name}</span>  </RevealCompnenet>  
          <RevealCompnenet> <span className="ms-2"> {ItemSold.price} $ </span>  </RevealCompnenet>  
        </Card.Title> </RevealCompnenet>
       

      </Card.Body>
      <Button variant="#DAA520" style={{ background : '#DAA520' , width: '100%'}}> GET NOW ! </Button>
      
      </div>
    </Card>
 
  
            
        </div>
    );
};

export default HomeSoldItem;