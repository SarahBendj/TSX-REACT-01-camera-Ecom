import StoreItemsData from "../data/items.json";
import { Card , Button } from "react-bootstrap";
import RevealCompnenet from "../hooks/Reveal";
const HomeSoldItem = () => {
   const ItemSold =StoreItemsData[11]
    return (
      <div className="SECTION">
          
        
        <Card id={ItemSold.id}  style={{ position:'relative' , height : '50vh'  }} >
            <div className="sold-off">   <RevealCompnenet> <span className="fs-2"> <h2> 35 % OFF</h2> </span>  </RevealCompnenet> </div>
            
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
        <RevealCompnenet>  <div> {ItemSold.description}</div> </RevealCompnenet>

      </Card.Body>
      <Button variant="#DAA520" style={{ background : '#DAA520'}}> GET NOW ! </Button>
      {/* <ModalBootstrap title={name} img={img} description={description}   /> */}
    </Card>
 
  
            
        </div>
    );
};

export default HomeSoldItem;