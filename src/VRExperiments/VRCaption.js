import "./VRCaption.css";

import PropTypes from "prop-types";

function VRCaption(props) {
  return (
    <div className="VRCaption">
      <h3>{props.header}</h3>
      <p>{props.subtext}</p>
    </div>
  );
}

export default VRCaption;

VRCaption.propTypes = {
  header: PropTypes.string.isRequired,
  subtext: PropTypes.string,
};
