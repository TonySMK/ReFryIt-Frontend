import "./InformationPageStyles.scss";
import navigateBackIcon from "../../assets/icons/chevron-left.black285x512.png";
import { useNavigate } from "react-router-dom";

export default function InformationPage() {
  const navigate = useNavigate();
  return (
    <section className="informationpagewrapper">
      <div className="informationpagewrapper__top">
        <button className="navigatebackbutton" onClick={() => navigate(-1)}>
          <img className="navigatebackbutton__icon" src={navigateBackIcon} />
          <div className="navigatebackbutton__text">Back</div>
        </button>
      </div>
      <div className="informationpagewrapper__body">
        hello my name is Tony Sun, i am a persuing to be a full-stack web
        developer. <br /> I graduated from BrainStation - Web Development
        bootcamp in March 2024. This web application is a brief demostration of
        some of the skills I learned as a fronend-developer and a backend
        developer in school.
        <br /> Github profile: TonySMK <br />@ https://github.com/TonySMK
      </div>
    </section>
  );
}
