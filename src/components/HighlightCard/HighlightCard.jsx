import "./HighlightCardStyles.scss";
import copyIcon from "../../assets/icons/copy-icon-512.png";
import closeIcon from "../../assets/icons/close-24px.svg";
import { Link } from "react-router-dom";

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

        <div></div>
        <button className="highlightcardwrapper__bottom__deletehiglightbutton">
          <img className="deletehiglightbutton__icon" src={closeIcon} />
        </button>

        <main className="highlightcardwrapper__bottom__cardcontent">
          <div className="highlightcardwrapper__bottom__cardcontent__left">
            {/* <button className="webpageiconbutton buttonhightlightwrapper">
              <img
                className="webpageiconbutton__icon"
                src={highlightInfo.favicon_url}
              />
            </button> */}

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
              V
              {/* <img className="highlightinnerwrapper__expandnotesbutton__icon" /> */}
            </button>
          </div>

          <div className="highlightcardwrapper__bottom__cardcontent__middle">
            <section className="highlightinnerwrapper__hightlightcontent">
              {highlightInfo.highlight_passage}
            </section>
          </div>

          <div className="highlightcardwrapper__bottom__cardcontent__right">
            <button className="edithighlightbutton buttonhightlightwrapper">
              E{/* <img className="hedithighlightbutton__icon" /> */}
            </button>
            <button className="starhighlightbutton buttonhightlightwrapper">
              #{/* <img className="starhighlightbutton__icon" /> */}
            </button>
            <button className="addhighlightnotesbutton buttonhightlightwrapper">
              +{/* <img className="addhighlightnotesbutton__icon" /> */}
            </button>
          </div>
        </main>
      </section>
    </article>
  );
}
