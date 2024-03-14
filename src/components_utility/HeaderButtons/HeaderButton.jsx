import "./HeaderButtonStyles.scss";
import { Link } from "react-router-dom";

export default function HeaderButton({ url, buttonText }) {
  return (
    <Link to={url}>
      <button>{buttonText}</button>
    </Link>
  );
}
