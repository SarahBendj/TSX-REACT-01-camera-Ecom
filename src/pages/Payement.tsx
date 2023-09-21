import { UseShoppingContext } from "../Context/UseShoppingContext";

const Payement = () => {

  const currentDate = new Date('2023-09-21');
  console.log(currentDate)
  const { amountToPay, selectedItemsToBuy } = UseShoppingContext();


  return (
    <div className="SECTION ">
      <h2 className="SECTION-title">Payment Confirmation</h2>
      <div className="SECTION-content">
        {
          selectedItemsToBuy.map((i)=> (
            <div key={i.id}>
            <p>Thank you for your payment!</p>
            <p>Item:{i.name} </p>
            </div>

          ))
        }

        <p>Total Amount Paid: <span> { amountToPay } </span> $</p>
        {/* <p>Payment Date: {currentDate} </p> */}
        <p>We appreciate your business and hope you enjoy your purchase.</p>
      </div>
    </div>
  );
};

export default Payement;
