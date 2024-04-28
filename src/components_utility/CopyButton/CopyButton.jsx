import "./CopyIconStyles.scss";

export default function CopyButton() {
  return (
    <button className="urllink__buttoncopy buttonhightlightwrapper">
      <img className="urllink__buttoncopy__icon" src={copyIcon} />
    </button>
  );
}
