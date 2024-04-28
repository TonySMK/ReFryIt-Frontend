import "./HighlightCardStyles.scss";
import { Link } from "react-router-dom";
import FaviconButton from "../../components_utility/FaviconButton/FaviconButton";
import DeleteButton from "../../components_utility/DeleteButton/DeleteButton";
import StarButton from "../../components_utility/StarButton/StarButton";
import NoteVisibiltyButton from "../../components_utility/NoteVisibilityButton/NoteVisibilityButton";
import EditButton from "../../components_utility/EditButton/Editbutton";

export default function HighlightCard({ highlightInfo }) {
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
          <DeleteButton />
          <StarButton />
          <NoteVisibiltyButton />
          <EditButton />
          <FaviconButton
            webAddress={fullAddress}
            favIconURL={highlightInfo.favicon_url}
          />
        </aside>
      </header>
      <p className="highlightcardwrapper__passage">
        {highlightInfo.highlight_passage}
      </p>
      <aside></aside>
    </article>
  );
}

/* 
<div className="highlightcardwrapper__bottom__cardcontent__middle">
  <section className="highlightinnerwrapper__hightlightcontent">
    {highlightInfo.highlight_passage}
  </section>
</div>; 

            <Link className="urllink__text" to={fullAddress} target="_blank">
              {highlightInfo.domain + highlightInfo.domain_path}
            </Link>

*/
