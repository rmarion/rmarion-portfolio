import "./ContactPage.css";
import Container from "react-bootstrap/Container";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Container fluid="xl" className="border rounded">
        <h2>Contact</h2>
        <h4>
          <b>Email: </b>
          <a href="mailto:mail@rmarion.com">mail@rmarion.com</a>
        </h4>
        <h4>
          <b>Page Github: </b>
          <a href="https://github.com/rmarion/rmarion-portfolio">
            rmarion/rmarion-portfolio
          </a>
        </h4>
      </Container>
    </div>
  );
}

export default ContactPage;
