import "./UnityFrame.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/worldgen-editor.loader.js",
  dataUrl: "build/worldgen-editor.data",
  frameworkUrl: "build/worldgen-editor.framework.js",
  codeUrl: "build/worldgen-editor.wasm",
});

unityContext.on("canvas", (canvas) => {
  canvas.getContext("webgl");
});

function UnityFrame() {
  return (
    <Container className="UnityContainer">
      <Unity className="UnityFrame" unityContext={unityContext} />
      <Jumbotron>
        <h5>Terrain Editor</h5>
        <p>
          This terrain editor is a basic (mostly) web optimized unity
          application that receives a map from a cloud hosted server and then
          allows editing of that map.
        </p>
        <h5>Performance Warning</h5>
        <p>
          Performance may be poor on less powerful devices (due largely to the
          presence of trees).
        </p>
        <h5>Controls</h5>
        <p>
          Left click to interact with the menus, right click to control the
          camera, and middle mouse button to control zoom.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default UnityFrame;
