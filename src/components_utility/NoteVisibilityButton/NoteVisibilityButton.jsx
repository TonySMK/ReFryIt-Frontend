import "./NoteVisibilityButtonStyles.scss";
import noteIcon from "../../assets/icons/notes-pad-icon.png";

export default function NoteVisibiltyButton() {
  return (
    <button className="notevisiblitybutton">
      <img className="notevisiblitybutton__icon" src={noteIcon} />
    </button>
  );
}
