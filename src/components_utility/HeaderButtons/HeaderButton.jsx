import "./HeaderButtonStyles.scss";
import { Link } from "react-router-dom";

export default function HeaderButton({
  url,
  buttonText,
  closeNavigationModalHandler,
  openSettingsModalHandler,
  enableClose,
}) {
  function automaticClose(enableClose) {
    if (enableClose) {
      closeNavigationModalHandler();
    }
  }

  function automaticCloseThenOpenSettings(enableClose) {
    if (enableClose) {
      closeNavigationModalHandler();
    }
    openSettingsModalHandler();
  }

  if (buttonText === "Settings") {
    return (
      <Link className="headerlinkwrapper" to={url}>
        <button
          className="headerlinkwrapper__button"
          onClick={() => automaticCloseThenOpenSettings(enableClose)}
        >
          {buttonText}
        </button>
      </Link>
    );
  } else {
  }

  return (
    <Link className="headerlinkwrapper" to={url}>
      <button
        className="headerlinkwrapper__button"
        onClick={() => automaticClose(enableClose)}
      >
        {buttonText}
      </button>
    </Link>
  );
}
