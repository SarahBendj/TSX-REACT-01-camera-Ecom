import { Card } from "react-bootstrap";
import { useState } from 'react';
import Counter from "./Counter";
import RevealComponnent from '../hooks/Reveal';
import SettingModal from "./Modal";
import ModalBootstrap from './OneItem';


type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  description: string;
  img: string;
};

const StoreItem = ({ id, price, name, description, img }: StoreItemProps ) => {

  //*MODAL SETTINGS
  // const [isModalOpen, setIsModalOpen] = useState(false);
 
  

  // const openModal = ( id:number) :void => {

  //   if(id){
  //     console.log(id)
  //     setIsModalOpen(true);

  //   } 
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };


  return (
  
    < >
      {/* SettingModal component */}
     

      {/* MY CARD */}
    <Card id={id}  className='card-shape'  >
      <RevealComponnent><Card.Img
        variant="top "
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      /></RevealComponnent>
   <Card.Body className=" d-flex flex-column" >
   <RevealComponnent>      <Card.Title className="d-flex justify-content-space-between align-items-baseline">
          <RevealComponnent> <span className="fs-2">{name}</span>  </RevealComponnent>  
          <RevealComponnent> <span className="ms-2"> {price} $ </span>  </RevealComponnent>  
        </Card.Title> </RevealComponnent>
        <RevealComponnent>  <div> {description}</div> </RevealComponnent>

        <RevealComponnent>  <div className="d-flex justify-content-space-between align-items-center">
          {" "}
          <Counter id={id} />
        </div> </RevealComponnent>
      </Card.Body>
      <ModalBootstrap title={name} img={img} description={description}   />
    </Card>
 



    

    </>
  
  );
};

export default StoreItem;
