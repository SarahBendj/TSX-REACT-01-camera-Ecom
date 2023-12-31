import React,{ KeyboardEvent, MouseEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StoreItemProps } from "./StoreItem";


const SearchBar = ({
  StoreItems,
  setFiltredItems,
}: {
  StoreItems: StoreItemProps[];
  setFiltredItems: (item: StoreItemProps[]) => void;
}) => {
  const [searchClue, setSearchClue] = useState<string>('');
  const [rangeValueStart, setRangeValueStart] = useState<number>(0);
  const [rangeValueEnd, setRangeValueEnd] = useState<number>(500);
  const [noMatchingProductMessage, setNoMatchingProductMessage] =
    useState<boolean>(false);

  const handleRangeValue = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ): void => {
    const value: number = parseInt(event.currentTarget.value, 10);
    setRangeValueStart(value);
    setRangeValueEnd(value + 100);

    if (!searchClue && rangeValueEnd !== 500 && rangeValueStart !== 0) {
      const filtredItemsByPrices: StoreItemProps[] = StoreItems.filter(
        (item: StoreItemProps) => {
          return item.price >= rangeValueStart && item.price <= rangeValueEnd;
        }
      );
      //* IF EVER THERES NO MATCHING DATA
      if (!filtredItemsByPrices.length) {
        setNoMatchingProductMessage(true);
      }
      setNoMatchingProductMessage(false);

      setFiltredItems(filtredItemsByPrices);
    }
  };

  const HasMatchingItems = (
    event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ): void => {
    const value: string | null = event.currentTarget.value.toLowerCase();
    setSearchClue(value);

    const filtredItemsByPricesOrNames: StoreItemProps[] = StoreItems.filter(
      (item: StoreItemProps) => {
        if (
          rangeValueStart !== 0 &&
          rangeValueEnd !== 500 &&
          item.price >= rangeValueStart &&
          item.price <= rangeValueEnd
        ) {
          return item.name.toLowerCase().includes(value);
        } else if (rangeValueStart === 0 && rangeValueEnd === 500) {
          return item.name.toLowerCase().includes(value);
        }
      }
    );

    setNoMatchingProductMessage(false);
    setFiltredItems(filtredItemsByPricesOrNames);

    //* IF EVER THERES NO MATCHING DATA
    if (!filtredItemsByPricesOrNames.length) {
      setNoMatchingProductMessage(true);
    }

    if (!value) {
      setSearchClue("");
      setNoMatchingProductMessage(false);
      return setFiltredItems(StoreItems);
    }
  };

  const resetValues = () => {
    setFiltredItems(StoreItems);
    setRangeValueStart(0);
    setRangeValueEnd(500);
    setSearchClue("");
    setNoMatchingProductMessage(false);
  };

  //*TSX
  return (
    <>
      <Container
        className="d-flex flex-row justify-content-center "
        style={{ marginBottom: "4rem" }}
      >
        <Row className="search-bar">
          <Col sm={4}>
            <Form className="d-flex  search-bar-form ">
              <div className="hidden-mobile">
                <div
                  className="range"
                  style={{
                    color: "white",
                    borderRadius: "50px",
                    margin: "auto",
                  }}
                >
                  <label
                    htmlFor="rangeID"
                    className="range-label hidden-mobile"
                  ></label>
                  <input
                    className="custom-range  hidden-mobile"
                    onChange={() => {handleRangeValue}}
                    type="range"
                    id="rangeID"
                    min="25"
                    max="500"
                    step="50"
                  />{" "}
                  {rangeValueStart} $ - {rangeValueEnd}
                </div>
              </div>

              {/* //* ONLY THIS NEEDS TO APPEAR IF MOBILE'S VERSION IS ACTIVE */}
              <div style={{ position: "relative" }}>
                <input
                  style={{
                    color: "blue",
                    paddingLeft: "2rem",
                    background: "white",
                  }}
                  type="search"
                  width="100pw"
                  placeholder="Search"
                  className="me-2 rounded-pill "
                  aria-label="Search"
                  value={searchClue}
                  onChange={() => {HasMatchingItems}}
                 
                />{" "}
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    color: "navy",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                  }}
                />
              </div>

              <div className="hidden-mobile">
                <Button
                  className="hidden-mobile rounded-pill border-0 "
                  style={{ background: "rgb(3,1,44)" }}
                ></Button>

                <Button
                  className="hidden-mobile btn btn-outline-light rounded-pill"
                  variant="transparent"
                  onClick={resetValues}
                >
                  {" "}
                  Clear{" "}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Col className={noMatchingProductMessage ? "visible" : "hidden"}>
        <h2> Aucun produit ne correspond aux critères de filtrage </h2>
      </Col>
    </>
  );
};

export default SearchBar;
