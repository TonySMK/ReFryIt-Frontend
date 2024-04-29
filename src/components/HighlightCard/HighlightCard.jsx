import "./HighlightCardStyles.scss";
import FaviconButton from "../../components_utility/FaviconButton/FaviconButton";
import DeleteButton from "../../components_utility/DeleteButton/DeleteButton";
import BookmarkButton from "../../components_utility/BookmarkButton/BookmarkButton";
import NoteVisibiltyButton from "../../components_utility/NoteVisibilityButton/NoteVisibilityButton";
import EditButton from "../../components_utility/EditButton/Editbutton";

export default function HighlightCard({ highlightInfo, updateStarStatus }) {
  const fullAddress = `${highlightInfo.domain}${highlightInfo.domain_path}`;
  return (
    <article className="highlightcardwrapper">
      <header className="highlightheader">
        <div className="highlightheader__titlewrapper">
          <h2 className="highlightheader__titlewrapper__title">
            {highlightInfo.title}
          </h2>
        </div>

        <aside className="highlightheader__actioncontainer">
          <FaviconButton
            webAddress={fullAddress}
            favIconURL={highlightInfo.favicon_url}
          />
          <BookmarkButton
            highlightInfo={highlightInfo}
            updateStarStatus={updateStarStatus}
          />
          <NoteVisibiltyButton />
          <EditButton />
          <DeleteButton />
        </aside>
      </header>
      <p className="highlightcardwrapper__passage">
        {highlightInfo.highlight_passage}
      </p>
      <aside></aside>
    </article>
  );
}
