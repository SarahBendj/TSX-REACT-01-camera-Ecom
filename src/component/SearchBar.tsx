import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StoreItemProps } from "./StoreItem";

const SearchBar = ({ StoreItems, setFiltredItems } :{ StoreItems: StoreItemProps[], setFiltredItems:( item : StoreItemProps[]) => void}) => {

  const [searchClue, setSearchClue] = useState<string | null>();
  const [ rangeValueStart , setRangeValueStart ]= useState<number>(0);
  const [ rangeValueEnd , setRangeValueEnd ]= useState<number>(500);



  const handleRangeValue = ( event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) :number =>   { 
    const value: number = parseInt(event.currentTarget.value ,10);
    console.log(value)
    setRangeValueStart(value)
    setRangeValueEnd( value + 50)

  }

  const HasMatchingItems = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {

    const value: string | null = event.currentTarget.value.toLowerCase()

      setSearchClue(value);

      const filtredItems: StoreItemProps[] = StoreItems.filter(
        (item: StoreItemProps) => {
         return  item.name.toLowerCase().includes(value);
        }
      );
   
        setFiltredItems(filtredItems);
      
    if(!value) {
      setSearchClue('')
      return setFiltredItems(StoreItems);

    }
      
    }

    const resetValues = (
    ) => {
      setFiltredItems(StoreItems);
      setRangeValueStart(0)
      setRangeValueEnd(500)
      setSearchClue('')
    }



  return (
    <Container
      className="d-flex flex-row justify-content-center "
      style={{ marginBottom: "4rem" }}
    >
      <Row  className="search-bar">
        <Col sm={4}>
          <Form className="d-flex  search-bar-form ">
            <div  className="bg-white border-0 " style={{ color: "#fff", borderRadius: "50px"  , margin: 'auto'}} className="range">
          <label htmlFor="rangeID" className="range-label"></label>
            <input 
             className="custom-range" 
             onChange={handleRangeValue} 
             type="range"
              id="rangeID"
               min='25' max='500' 
               /> { rangeValueStart} $ - {rangeValueEnd}
            </div>
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
            <Button className="bg-white border-0 " style={{ color: "#842E1B", borderRadius: "50px" }} onClick={resetValues}> Reset </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
