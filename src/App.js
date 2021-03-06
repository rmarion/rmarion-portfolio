import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderBar from "./HeaderBar/HeaderBar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditorWithoutTrees from "./TerrainEditor/EditorWithoutTrees";
import HomePage from "./HomePage/HomePage";
import ContactPage from "./ContactPage/ContactPage";
import VRExperimentsPage from "./VRExperiments/VRExperimentsPage";
import AboutPage from "./AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <div className="header">
        <HeaderBar />
      </div>
      <Container className="body" fluid>
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/terrain-editor">
              <EditorWithoutTrees />
            </Route>
            <Route path="/vr-experiments">
              <VRExperimentsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
