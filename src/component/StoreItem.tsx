import { Card } from "react-bootstrap";
import Counter from "./Counter";


type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  description: string;
  img: string;
};

const StoreItem = ({ id, price, name, description, img }: StoreItemProps) => {
  

  return (
    <Card>
      <Card.Img
        variant="top "
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className=" d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2"> {price} $ </span>
        </Card.Title>
        <div> {description}</div>
        <div className="d-flex justify-content-space-between align-items-center">
          {" "}
          <Counter id={id} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
