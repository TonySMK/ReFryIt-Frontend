import "./FaviconButtonStyles.scss";
import { Link } from "react-router-dom";

export default function FaviconButton({ webAddress, favIconURL }) {
  return (
    <Link className="favuiconbutton" to={webAddress} target="_blank">
      <img className="favuiconbutton__icon" src={favIconURL} />
    </Link>
  );
}
