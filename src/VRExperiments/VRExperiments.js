import "./VRExperiments.css";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import VRCaption from "./VRCaption";

import Library from "./Images/library_hidef.PNG";
import OppressiveCity from "./Images/oppressive_city_hidef.PNG";
import BlurredUnblurredScreenshot from "./Images/blurred_unblurred_hidef.PNG";
import PhysicalizedInterface from "./Images/physicalized_interface_hidef.PNG";
import CityDemo from "./Images/city_demo_hidef.PNG";

function VRExperiments() {
  return (
    <Container className="VRExperiments">
      <Carousel fade>
        <Carousel.Item>
          <img src={Library} alt="" />
          <Carousel.Caption>
            <VRCaption
              header="Virtual Library"
              subtext="Virtual Library Description"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={OppressiveCity} alt="" />
          <Carousel.Caption>
            <VRCaption
              header="Oppressive City"
              subtext="Oppressive City Description"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={BlurredUnblurredScreenshot} alt="" />
          <Carousel.Caption>
            <VRCaption
              header="Blurred Screenshot"
              subtext="Blurred Screenshot Description"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={PhysicalizedInterface} alt="" />
          <Carousel.Caption>
            <VRCaption
              header="Physicalized Interface"
              subtext="Physicalized Interface Description"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CityDemo} alt="" />
          <Carousel.Caption>
            <VRCaption header="City Demo" subtext="City Demo Description" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Jumbotron>
        <h5>VR Experiments</h5>
        <p>
          These are a series of screenshots from virtual reality neuroscience
          experiments from around 2017. Each environment was made very
          specifically to both be highly performant in virtual reality, as well
          as to be highly deterministic due to their intended purpose.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default VRExperiments;
