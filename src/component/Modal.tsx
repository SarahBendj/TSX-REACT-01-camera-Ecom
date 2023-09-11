import  { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyModal = ({children , title , description , img}) => {
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
          <Modal.Title className='modal-heading'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
           <img className='modal-img' src={img} />
           <div className="modal-content-header"> Good to know</div>
           <p className="modal-content">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam cum assumenda exercitationem. 
           Mollitia, voluptates. Aperiam quo optio maxime repellat illo aut modi. Voluptatem beatae aut ut non quam deserunt!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  style={{ backgroundColor:'#842E1B' }}  className='border-0' variant="primary" onClick={handleClose}>
             + Add to the basket
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
