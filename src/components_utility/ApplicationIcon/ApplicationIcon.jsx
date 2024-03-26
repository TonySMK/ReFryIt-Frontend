import "./ApplicationIconStyles.scss";
import applicationIcon from "../../assets/icons/tin-can-icon.png";

export default function ApplicationIcon() {
  return (
    <>
      <img className="applicationicon" src={applicationIcon} />
    </>
  );
}
