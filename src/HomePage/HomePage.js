import "./HomePage.css";

import Container from "react-bootstrap/Container";

function HomePage() {
  return (
    <div className="HomePage">
      <Container fluid="xl" className="border rounded">
        <h2>Home Page</h2>
        <h4>
          This site contains examples of <a href="terrain-editor">some</a>{" "}
          interesting <a href="vr-experiments">things</a> I've worked on, as
          well as a bit about <a href="about">what I enjoy doing</a>.
        </h4>
      </Container>
    </div>
  );
}

export default HomePage;
