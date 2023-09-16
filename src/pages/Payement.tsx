import React from "react";
import { useLocation } from "react-router-dom";

const Payement = () => {

  const location = useLocation();
  const selectedItems = location.state?.selectedItems ;
  console.log(location.state)
  console.log(selectedItems)
  return (
    <div className="SECTION ">
      <h2 className="SECTION-title">Payment Confirmation</h2>
      <div className="SECTION-content">
        <p>Thank you for your payment!</p>
        <p>Item: </p>
        <p>Total Amount Paid: $</p>
        <p>Payment Date: </p>
        <p>We appreciate your business and hope you enjoy your purchase.</p>
      </div>
    </div>
  );
};

export default Payement;
