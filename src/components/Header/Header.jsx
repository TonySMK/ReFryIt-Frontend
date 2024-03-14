import "./HeaderStyles.scss";
import HeaderButton from "../../components_utility/HeaderButtons/HeaderButton";
import ChangePageColorScheme from "../../components_utility/ChangePageColorScheme/ChangePageColorScheme";
import tinCan from "../../assets/icons/tin-can-icon.png";

import veiwDetailsIcon from "../../assets/icons/view-details-512.png";
import groupDetailsIcon from "../../assets/icons/book-dark_3725.png";
import searchIcon from "../../assets/icons/search-icon-3-512.png";
import copyIcon from "../../assets/icons//copy-icon-512.png";

export default function Header() {
  return (
    <header>
      <button className="detailsiconbutton">
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

      <button className="detailsiconbutton">
        <img className="detailsiconbutton__icon" src={groupDetailsIcon} />
      </button>

      {/* <div className="headericonwrapper">
        <img
          className="headericonwrapper__icon"
          src={tinCan}
          alt="ReFryIt Icon"
        />
      </div> */}
      {/* <nav>
        <HeaderButton url="/home/recent" buttonText="Home" />
        <HeaderButton url="/home/favorites" buttonText="Favorites" />
        <HeaderButton url="/information" buttonText="Info" />
        <button>Settings</button>
        <HeaderButton url="/logout" buttonText="Log Out" />
        <ChangePageColorScheme />
      </nav> */}
    </header>
  );
}
