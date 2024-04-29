import "./BookmarkButtonStyles.scss";
import bookmarkBlack from "../../assets/icons/bookmarkicon-black.png";
import bookmarkWhite from "../../assets/icons/bookmarkicon-white.png";

export default function StarButton({ highlightInfo, updateStarStatus }) {
  let bookmarkIcon;

  if (highlightInfo.star_status == 1) {
    bookmarkIcon = bookmarkBlack;
  } else {
    bookmarkIcon = bookmarkWhite;
  }

  return (
    <button
      className="starbutton"
      onClick={() =>
        updateStarStatus(highlightInfo.id, highlightInfo.star_status)
      }
    >
      <img
        className="starbutton__icon"
        src={bookmarkIcon}
        alt="favorite highlight"
      />
    </button>
  );
}
