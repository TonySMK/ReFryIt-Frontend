import "./EditButtonStyles.scss";
import pencilIcon from "../../assets/icons/pencil-outline-icon.png";

export default function EditButton() {
  return (
    <button className="editbutton">
      <img className="editbutton__icon" src={pencilIcon} />
    </button>
  );
}
