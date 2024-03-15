import "./ChangePageColorSchemeStyles.scss";
import sunIcon from "../../assets/icons/sun-yellow-icon.png";
import moonIcon from "../../assets/icons/moon-icon.png";

export default function ChangePageColorScheme() {
  let colorSchemeIcon = moonIcon;
  return (
    <button className="colorschemeiconwrapper">
      <img
        className="colorschemeiconwrapper__icon"
        src={colorSchemeIcon}
        alt="Light/Dark Color Scheme Button"
      />
    </button>
  );
}
