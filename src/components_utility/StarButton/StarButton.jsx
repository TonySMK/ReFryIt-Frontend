import "./StarButtonStyles.scss";
import starIcon from "../../assets/icons/star-icon.png";

export default function StarButton() {
  return (
    <button className="starbutton">
      <img
        className="starbutton__icon"
        src={starIcon}
        alt="favorite highlight"
      />
    </button>
  );
}
