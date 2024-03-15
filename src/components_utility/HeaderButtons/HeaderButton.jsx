import "./HeaderButtonStyles.scss";
import { Link } from "react-router-dom";

export default function HeaderButton({
  url,
  buttonText,
  closeNavigationModalHandler,
  enableClose,
}) {
  function automaticClose(enableClose) {
    if (enableClose) {
      closeNavigationModalHandler();
    }
  }
  return (
    <Link className="headerlinkwrapper" to={url}>
      <button
        className="headerlinkwrapper__button"
        onClick={() => automaticClose(enableClose)}
      >
        {" "}
        {buttonText}
      </button>
    </Link>
  );
}
