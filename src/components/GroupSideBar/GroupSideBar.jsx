import "./GroupSideBarStyles.scss";
import gearIconLight from "../../assets/icons/Gear-Icon-Clear-Background.png";
import gearIconDark from "../../assets/icons/Gear-Icon-White-Background.png";

export default function GroupSideBar() {
  return (
    <section className="groupsidebarwrapper">
      <div>Groups</div>
      <button className="groupeditbuttonwrapper">
        <img className="groupeditbuttonwrapper__icon" src={gearIconLight} />
      </button>
    </section>
  );
}
