import "./GroupSideBarStyles.scss";
import gearIcon from "../../assets/icons/gear-icon.png";

export default function GroupSideBar() {
  return (
    <section>
      <div>Groups</div>
      <button className="groupeditbuttonwrapper">
        <img className="groupeditbuttonwrapper__icon" src={gearIcon} />
      </button>
    </section>
  );
}
