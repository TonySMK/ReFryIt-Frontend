import "./HeaderStyles.scss";
import HeaderButton from "../../components_utility/HeaderButtons/HeaderButton";
import ChangePageColorScheme from "../../components_utility/ChangePageColorScheme/ChangePageColorScheme";
import tinCan from "../../assets/icons/tin-can-icon.svg";

export default function Header() {
  return (
    <header>
      <div className="headericonwrapper">
        <img
          className="headericonwrapper__icon"
          src={tinCan}
          alt="ReFryIt Icon"
        />
      </div>
      <nav>
        <HeaderButton url="/home/recent" buttonText="Home" />
        <HeaderButton url="/home/favorites" buttonText="Favorites" />
        <HeaderButton url="/information" buttonText="Info" />
        {/* Settings button activates modal */}
        <button>Settings</button>
        <HeaderButton url="/logout" buttonText="Log Out" />
        <ChangePageColorScheme />
      </nav>
    </header>
  );
}
