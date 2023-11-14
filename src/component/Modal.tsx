import  { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { UseShoppingContext } from "../Context/UseShoppingContext";
import useNotification from "../hooks/Notification";
import React from "react";

type ModalProps = {
  title: string;
  description?: string;
  img: string;
  id:  number;
  children?: React.ReactNode; 
}

const MyModal = ({children , title , img , id} : ModalProps) => {

  const { increaseItemsQuantity } = UseShoppingContext();
  const { showSuccess } = useNotification();

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div >
      <Button   style={{ backgroundColor:'white' , color:'#842E1B', position:'absolute' , bottom:'0', right: '0' }} onClick={handleShow} className='border-0'>
        More details
      </Button>

      <Modal className="modal-overlay" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-heading' style={{ color:'#DAA520' }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
           <img className='modal-img' src={img} />
           <div className="modal-content-header"> Good to know</div>
           <p className="modal-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam cum assumenda exercitationem. 
           Mollitia, voluptates. Aperiam quo optio maxime repellat illo aut modi. Voluptatem beatae aut ut non quam deserunt!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary border-0" onClick={handleClose} style={{   color:'wheat', backgroundColor:'crimson'}}>
            Close
          </Button>
          <Button  style={{ backgroundColor:'#DAA520' , color:'black' }}  className='border-0' variant="primary" 
           onClick={()=>
             { increaseItemsQuantity(id);
              showSuccess(`Model ${title} has been successfully added `);
              setShowModal(false) }
             }
             >
             + Add to the basket
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
