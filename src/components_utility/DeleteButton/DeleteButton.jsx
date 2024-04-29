import "./DeleteButtonStyles.scss";
import deleteIcon from "../../assets/icons/red_x.png";

export default function DeleteButton({ highlightInfo, deleteHighlight }) {
  return (
    <button
      className="deletebutton"
      onClick={() => {
        deleteHighlight(highlightInfo.id);
      }}
    >
      <img
        className="deletebutton__icon"
        src={deleteIcon}
        alt="delete highlight"
      />
    </button>
  );
}
