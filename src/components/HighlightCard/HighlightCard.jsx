import "./HighlightCardStyles.scss";
import copyIcon from "../../assets/icons/copy-icon-512.png";
import closeIcon from "../../assets/icons/close-24px.svg";
import { Link } from "react-router-dom";
import starIcon from "../../assets/icons/star-icon.png";
import pencilIcon from "../../assets/icons/pencil-outline-icon.png";
import noteIcon from "../../assets/icons/sticky-note-icon2.png";

export default function HighlightCard({ highlightInfo }) {
  const fullAddress = `${highlightInfo.domain}${highlightInfo.domain_path}`;
  return (
    <article className="highlightcardwrapper">
      <section className="highlightcardwrapper__top">
        <div className="title">{highlightInfo.title}</div>
        <div className="urlanddatewrapper">
          <div className="urllink">
            <button className="urllink__buttoncopy buttonhightlightwrapper">
              <img className="urllink__buttoncopy__icon" src={copyIcon} />
            </button>

            <Link className="urllink__text" to={fullAddress} target="_blank">
              {highlightInfo.domain + highlightInfo.domain_path}
            </Link>
          </div>

          <div className="dateadded">{highlightInfo.created_at}</div>
        </div>
      </section>

      <section className="highlightcardwrapper__bottom">
        {/* THIS IS THE BOTTOM SECTION */}

        <button className="highlightcardwrapper__bottom__deletehiglightbutton primaryclosebutton">
          <img className="deletehiglightbutton__icon" src={closeIcon} />
        </button>

        <main className="highlightcardwrapper__bottom__cardcontent">
          <div className="highlightcardwrapper__bottom__cardcontent__left">
            <Link
              className="webpageiconbutton buttonhightlightwrapper"
              to={fullAddress}
              target="_blank"
            >
              <img
                className="webpageiconbutton__icon"
                src={highlightInfo.favicon_url}
              />
            </Link>

            <button className="expandnotesbutton buttonhightlightwrapper">
              <img
                className="highlightinnerwrapper__expandnotesbutton__icon buttoniconimage"
                src={noteIcon}
              />
            </button>
          </div>

          <div className="highlightcardwrapper__bottom__cardcontent__middle">
            <section className="highlightinnerwrapper__hightlightcontent">
              {highlightInfo.highlight_passage}
            </section>
          </div>

          <div className="highlightcardwrapper__bottom__cardcontent__right">
            <button className="edithighlightbutton buttonhightlightwrapper">
              <img
                className="hedithighlightbutton__icon buttoniconimage"
                src={pencilIcon}
              />
            </button>

            <button className="starhighlightbutton buttonhightlightwrapper">
              <img
                className="starhighlightbutton__icon buttoniconimage"
                src={starIcon}
              />
            </button>

            <button className="addhighlightnotesbutton buttonhightlightwrapper">
              +<img className="addhighlightnotesbutton__icon" />
            </button>
          </div>
        </main>
      </section>
    </article>
  );
}
