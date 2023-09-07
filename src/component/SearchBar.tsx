import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StoreItemProps } from "./StoreItem";

const  SearchBar = ({ StoreItems, setFiltredItems }) => {
  const [searchClue, setSearchClue] = useState<string | null>(null);



  const HasMatchingItems = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    const value: string | null = event.target.value;
    if (value) {
      setSearchClue(value); 

     const filtredItems = StoreItems.filter((item: StoreItemProps) => {
        if (item.name === (value)) {
          return item ;
        }
        
        setFiltredItems(filtredItems)
       
      });
    } else {
      return setFiltredItems(StoreItems)
    }
  };
  

  return (
    <Container
      className="d-flex flex-row justify-content-center "
      style={{ marginBottom: "4rem" }}
    >
      <Row>
        <Col sm={4}>
          <Form className="d-flex">
            <input
              style={{ color: "#842E1B", paddingLeft: "2rem" }}
              type="search"
              width="100pw"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              value={searchClue}
              onChange={HasMatchingItems}
            />
            {/* / jdkkddk<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> */}
            <Button
              className="rounded-pill border-0"
              style={{ background: "#842E1B" }}
            >
              <FontAwesomeIcon icon={faSearch} style={{ color: "#fff" }} />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;