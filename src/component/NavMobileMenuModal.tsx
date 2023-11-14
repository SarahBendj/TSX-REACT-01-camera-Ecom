import React,{ ReactNode, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


type ModalProps = {
    children : ReactNode    
}


const NavMobileMenu = ({ children } : ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Button
        style={{
          backgroundColor: "white",
          color: "#842E1B",
          position: "absolute",
          bottom: "30%",
          left: "0",
        }}
        onClick={handleShow}
        className="border-0"
      >
        <FontAwesomeIcon icon={faBars} className="menu-bars-mobile" />
      </Button>

      <Modal
        style={{ width: "60vw" }}
        className="modal-overlay"
        show={showModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-heading" style={{ color: "#DAA520" }}>
            {" "}
            Menu{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body onClick={() => setShowModal(false)}>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default NavMobileMenu;
