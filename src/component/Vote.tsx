import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import RevealComponenet from '../hooks/Reveal';

const Vote = () => {
  const [votePourcentageChoice1, SetVotePourcentageChoice1] =
    useState<number>(15);
  const [votePourcentageChoice2, SetVotePourcentageChoice2] =
    useState<number>(12);
  const [votePourcentageChoice3, SetVotePourcentageChoice3] =
    useState<number>(25);

  

  const ResultOfVotes = (votechoice: number): number => {
    const MaxRate: number =
    votePourcentageChoice1 + votePourcentageChoice2 + votePourcentageChoice3;

    const equation:number = Math.round((votechoice * 100) / MaxRate);
    return equation;
  };


  const HandleVote1 = () => {
    SetVotePourcentageChoice1(votePourcentageChoice1 + 1);
  };
  const HandleVote2 = () => {
    SetVotePourcentageChoice2(votePourcentageChoice2 + 1);
  };
  const HandleVote3 = () => {
    SetVotePourcentageChoice3(votePourcentageChoice3 + 1);
  };

  return (
    <div>
      <Container style={{ height: "100%" }} >
        <Card.Text> <h4> To which category you think you belong to ?</h4></Card.Text>
        <Row  className='d-flex flex-row'>
          <Col className="text-align">
          <RevealComponenet>  <Button
              onClick={HandleVote1}
              style={{ background: "#842E1B", color: "white", padding: "1rem" }}
              className="w-100 border-0 vote-section-item"
            >
              <div className="d-flex flex-row justify-content-between">
                <span> Expert</span>{" "}
                <span> {ResultOfVotes(votePourcentageChoice1)} %</span>
              </div>
            </Button> </RevealComponenet>
          </Col>
          <Col className="text-align">

          <RevealComponenet>  <Button
              onClick={HandleVote2}
              style={{ background: "#842E1B", color: "white", padding: "1rem" }}
              className="w-100 border-0 vote-section-item"
            >
              <div className="d-flex flex-row justify-content-between">
                <span> professional</span>{" "}
                <span> {ResultOfVotes(votePourcentageChoice2)} %</span>
              </div>
            </Button> </RevealComponenet>
          </Col>
          <Col className="text-align">

          <RevealComponenet>  <Button
              onClick={HandleVote3}
              style={{ background: "#842E1B", color: "white", padding: "1rem" }}
              className="w-100 border-0 vote-section-item"
            >
              <div className="d-flex flex-row justify-content-between ">
                {" "}
                <span> Junior</span>{" "}
                <span> {ResultOfVotes(votePourcentageChoice3)} %</span>
              </div>
            </Button> </RevealComponenet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vote;
