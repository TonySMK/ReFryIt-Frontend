import "./HighlightCardStyles.scss";
import copyIcon from "../../assets/icons/copy-icon-512.png";
import closeIcon from "../../assets/icons/close-24px.svg";

export default function HighlightCard({ highlightInfo }) {
  return (
    <article className="highlightcardwrapper">
      <section className="highlightcardwrapper__top">
        <div className="title">{highlightInfo.title}</div>
        <div className="urlanddatewrapper">
          <div className="urllink">
            <button className="urllink__buttoncopy buttonhightlightwrapper">
              <img className="urllink__buttoncopy__icon" src={copyIcon} />
            </button>

            <div className="urllink__text">
              {/* {highlightInfo.domain + highlightInfo.domain_path} */}
              DOMAIN PATH
            </div>
          </div>
          <div className="dateadded">{highlightInfo.created_at}</div>
        </div>
      </section>

      <section className="highlightcardwrapper__bottom">
        <button className="deletehiglightbutton buttonhightlightwrapper">
          <img className="deletehiglightbutton__icon" src={closeIcon} />
        </button>

        <main className="highlightinnerwrapper__bottom__cardcontent">
          <div className="highlightinnerwrapper__bottom__cardcontent__left">
            <button className="highlightinnerwrapper__webpageiconbutton buttonhightlightwrapper">
              <img
                className="highlightinnerwrapper__webpageiconbutton__icon"
                src={highlightInfo.favicon_url}
              />
            </button>

            <button className="highlightinnerwrapper__expandnotesbutton buttonhightlightwrapper">
              V
              {/* <img className="highlightinnerwrapper__expandnotesbutton__icon" /> */}
            </button>
          </div>

          <div className="highlightinnerwrapper__bottom__cardcontent__middle">
            <section className="highlightinnerwrapper__hightlightcontent">
              {highlightInfo.highlight_passage}
            </section>
          </div>

          <div className="highlightinnerwrapper__bottom__cardcontent__right">
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
