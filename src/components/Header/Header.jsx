import "./HeaderStyles.scss";

import { useState } from "react";

import NavigationCompactModal from "../../components_modals/NavigationCompactModal/NavigationCompactModel";
import GroupModal from "../../components_modals/GroupModal/GroupModal";

import veiwDetailsIcon from "../../assets/icons/view-details-512.png";
import groupDetailsIcon from "../../assets/icons/book-dark_3725.png";
import searchIcon from "../../assets/icons/search-icon-3-512.png";
import copyIcon from "../../assets/icons//copy-icon-512.png";

export default function Header() {
  const [isNavigationModelOpen, setIsNavigationModelOpen] = useState(false);
  const [isGroupModelOpen, setIsGroupModelOpen] = useState(false);

  function closeNavigationModalHandler() {
    setIsNavigationModelOpen(false);
  }

  function openNavigationModalHandler() {
    setIsNavigationModelOpen(true);
  }

  function closeGroupModalHandler() {
    setIsGroupModelOpen(false);
  }

  function openGroupModalHandler() {
    setIsGroupModelOpen(true);
  }

  return (
    <header className="mainheader">
      <button
        className="detailsiconbutton"
        onClick={() => openNavigationModalHandler()}
      >
        <img className="detailsiconbutton__icon" src={veiwDetailsIcon} />
      </button>

      <form className="headerform">
        <input className="headerform__input" />

        <div className="headerform__buttonwrapper">
          <button className="headerform__buttonwrapper__button">
            <img
              className="headerform__buttonwrapper__button__icon"
              src={copyIcon}
            />
          </button>
          <button className="headerform__buttonwrapper__button">
            <img
              className="headerform__buttonwrapper__button__icon"
              src={searchIcon}
            />
          </button>
        </div>
      </form>

      <button
        className="detailsiconbutton"
        onClick={() => openGroupModalHandler()}
      >
        <img className="detailsiconbutton__icon" src={groupDetailsIcon} />
      </button>

      <NavigationCompactModal
        isNavigationModelOpen={isNavigationModelOpen}
        closeNavigationModalHandler={closeNavigationModalHandler}
      />

      <GroupModal
        isGroupModelOpen={isGroupModelOpen}
        closeGroupModalHandler={closeGroupModalHandler}
      />
    </header>
  );
}
