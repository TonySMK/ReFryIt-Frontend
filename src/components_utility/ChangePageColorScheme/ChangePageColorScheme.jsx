import "./ChangePageColorSchemeStyles.scss";
import sunIcon from "../../assets/icons/sun-icon.jpg";
import moonIcon from "../../assets/icons/noon-icon.jpg";

export default function ChangePageColorScheme() {
  let colorSchemeIcon = moonIcon;
  return (
    <div className="colorschemeiconwrapper">
      <img
        className="colorschemeiconwrapper__icon"
        src={colorSchemeIcon}
        alt="Light/Dark Color Scheme Button"
      />
    </div>
  );
}
