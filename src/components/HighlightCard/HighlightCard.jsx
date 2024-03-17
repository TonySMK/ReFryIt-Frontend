import "./HighlightCardStyles.scss";
import copyIcon from "../../assets/icons/copy-icon-512.png";
import closeIcon from "../../assets/icons/close-24px.svg";

export default function HighlightCard({ highlightInfo }) {
  // console.log(highlightInfo);
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
              {highlightInfo.domain + highlightInfo.domain_path}
            </div>
          </div>
          <div className="dateadded">{highlightInfo.created_at}</div>
        </div>
      </section>
      <section className="highlightcardwrapper__bottom">
        <button className="deletehiglightbutton buttonhightlightwrapper">
          <img className="deletehiglightbutton__icon" src={closeIcon} />
        </button>
        <main className="highlightinnerwrapper">
          <button className="highlightinnerwrapper__webpageiconbutton buttonhightlightwrapper">
            @
            {/* <img className="highlightinnerwrapper__webpageiconbutton__icon" /> */}
          </button>
          <button className="highlightinnerwrapper__expandnotesbutton buttonhightlightwrapper">
            V
            {/* <img className="highlightinnerwrapper__expandnotesbutton__icon" /> */}
          </button>
          <section className="highlightinnerwrapper__hightlightcontent">
            {highlightInfo.highlight_passage}
          </section>
          <button className="highlightinnerwrapper__edithighlight buttonhightlightwrapper">
            E
            {/* <img className="highlightinnerwrapper__edithighlight__icon" /> */}
          </button>
          <button className="highlightinnerwrapper__starhighlightbutton buttonhightlightwrapper">
            #
            {/* <img className="highlightinnerwrapper__starhighlightbutton__icon" /> */}
          </button>
          <button className="highlightinnerwrapper__addnotesbutton buttonhightlightwrapper">
            +
            {/* <img className="highlightinnerwrapper__addnotesbutton__icon" /> */}
          </button>
        </main>
      </section>
    </article>
  );
}
