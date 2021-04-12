import "./AboutPage.css";
import Container from "react-bootstrap/Container";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Container fluid="xl" className="border rounded">
        <h2>About</h2>
        <p>
          I've been programming for over 20 years for fun and profit, and I
          figured I should start making a site to throw some of my new projects
          onto. In my free time I largely focus on procedural world generation
          and VR, but often when I see something neat in a game, framework, or
          programming language I'll throw myself at recreating it.
        </p>
      </Container>
    </div>
  );
}

export default AboutPage;
