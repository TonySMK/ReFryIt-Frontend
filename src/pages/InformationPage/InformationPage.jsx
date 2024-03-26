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
        Hello, my name is Tony Sun, I am pursuing to be a full-stack web
        developer. <br /> I graduated from BrainStation - Web Development
        bootcamp in March 2024. <br />
        This web application is a brief demostration of some of the skills I
        learned after attending BrainStation. <br />
        <br />
        The entire application suite consists of a front-end application,
        <br />
        back-end application, and a chrome extension application. <br />
        The project's concept attempts to provide an alternative take on native
        <br />
        browser bookmark managers, by providing users greater context of their
        "bookmarks". <br />
        As the number of bookmarks increase and as time pass, the significance
        and context of <br />
        each bookmark is lost amoung the sea of folders and other bookmarks. By
        displaying a user <br />
        defined text snippet of a "bookmarked" webpage, each "bookmark"'s'
        context <br />
        and exact significance can be better presented and preserved. <br />
        <br />
        The chrome extension is what allows users to capture snapshots of <br />
        a webpage's texts, which are then send and stored in the back-end
        database.
        <br />
        The front-end application allows users to reveiw and modify their list
        of bookmarks <br />
        and reference the webpage that they captured it from via the chrome
        extension.
        <br />
        <br /> Github profile: TonySMK @ https://github.com/TonySMK
        <br /> Repo @ https://github.com/TonySMK/ReFryIt-Frontend
      </div>
    </section>
  );
}
