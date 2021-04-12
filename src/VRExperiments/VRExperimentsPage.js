import "./VRExperimentsPage.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import VRExperiments from "./VRExperiments";
import VRCaption from "./VRCaption";

function VRExperimentsPage() {
  return (
    <Container className="VRExperiments">
      <Carousel fade>
        {VRExperiments.map((experiment) => (
          <Carousel.Item>
            <img src={experiment.image} alt={experiment.header} />
            <Carousel.Caption>
              <VRCaption
                key={experiment.key}
                header={experiment.header}
                subtext={experiment.subtext}
              />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Jumbotron>
        <h5>VR Experiments</h5>
        <p>
          These are a series of screenshots from virtual reality neuroscience
          experiments from around 2017. Generally, environments were made so
          participants could walk around and explore them fully, either with
          room-scale or similar technology or with controllers where
          appropriate.
        </p>
        <p>
          Each environment was made very specifically to both be highly
          performant in virtual reality, as well as to be highly deterministic
          due to their intended purpose.
        </p>
      </Jumbotron>
      <Accordion>
        {VRExperiments.map((experiment) => (
          <>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={experiment.key}
                >
                  {experiment.header}
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Accordion.Collapse eventKey={experiment.key}>
              <Card.Body>{experiment.description}</Card.Body>
            </Accordion.Collapse>
          </>
        ))}
      </Accordion>
    </Container>
  );
}

export default VRExperimentsPage;
