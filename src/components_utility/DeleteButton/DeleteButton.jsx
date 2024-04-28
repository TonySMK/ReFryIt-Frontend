import "./DeleteButtonStyles.scss";
import deleteIcon from "../../assets/icons/red_x.png";

export default function DeleteButton() {
  return (
    <button className="deletebutton">
      <img
        className="deletebutton__icon"
        src={deleteIcon}
        alt="delete highlight"
      />
    </button>
  );
}
