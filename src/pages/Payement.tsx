import React, { useEffect } from "react";
import { UseShoppingContext } from "../Context/UseShoppingContext";

const Payment = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const { setCartItems } = UseShoppingContext();
  useEffect(()=> {
    setCartItems([])
  })

  return(
    <div className="SECTION">
      <h2 className="SECTION-title">Payment Confirmation</h2>
      <div className="SECTION-content">

            <div className="ticket-payement-detail">
              {" "}
              Purchase date on  <span className="payment-content">
                {formattedDate}{" "}
              </span>{" "}
        </div>
      </div>

      <p>We appreciate your business and hope you enjoy your purchase.</p>
    </div>
  );
};

export default Payment;
