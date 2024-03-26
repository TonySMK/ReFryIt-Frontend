import "./NavigationCompactModalStyles.scss";
import { createPortal } from "react-dom";
import closeIcon from "../../assets/icons/close-24px.svg";

import HeaderButton from "../../components_utility/HeaderButtons/HeaderButton";
import ChangePageColorScheme from "../../components_utility/ChangePageColorScheme/ChangePageColorScheme";

export default function NavigationCompactModal({
  isNavigationModelOpen,
  closeNavigationModalHandler,
  openSettingsModalHandler,
}) {
  let thebodyselector = document.getElementById("root");
  if (!isNavigationModelOpen) {
    thebodyselector.style.overflowY = "scoll";
    thebodyselector.style.height = "auto";
    return null;
  } else {
    thebodyselector.style.overflowY = "hidden";
    thebodyselector.style.height = "100vh";
  }

  return createPortal(
    <>
      <aside className="navigationmodalwrapper">
        <nav className="navigationmodalwrapper__buttonswrapper">
          <HeaderButton
            url="/home/recent"
            buttonText="Home"
            enableClose={true}
            closeNavigationModalHandler={closeNavigationModalHandler}
          />
          <HeaderButton
            url="/home/favorites"
            buttonText="Favorites"
            enableClose={true}
            closeNavigationModalHandler={closeNavigationModalHandler}
          />
          <HeaderButton
            url="/information"
            buttonText="Info"
            enableClose={true}
            closeNavigationModalHandler={closeNavigationModalHandler}
          />
          <HeaderButton
            url=""
            buttonText="Settings"
            enableClose={true}
            openSettingsModalHandler={openSettingsModalHandler}
            closeNavigationModalHandler={closeNavigationModalHandler}
          />
          <HeaderButton url="/logout" buttonText="Log Out" />
          <ChangePageColorScheme />

          <button
            className="navigationmodalwrapper__closebuttonwrapper"
            onClick={() => closeNavigationModalHandler()}
          >
            <img
              className="navigationmodalwrapper__closebuttonwrapper__icon"
              src={closeIcon}
            />
          </button>
        </nav>
      </aside>
    </>,
    document.getElementById("navmodalcontainer")
  );
}
