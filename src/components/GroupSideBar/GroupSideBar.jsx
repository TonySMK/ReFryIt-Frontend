import "./GroupSideBarStyles.scss";
import gearIconLight from "../../assets/icons/Gear-Icon-Clear-Background.png";
import gearIconDark from "../../assets/icons/Gear-Icon-White-Background.png";

export default function GroupSideBar() {
  return (
    <section className="groupsidebarwrapper">
      <section className="groupsidebarwrapper__top">
        <div className="groupsidebarwrapper__top__title">Groups</div>

        <button className="groupsidebarwrapper__top__button">
          <img
            className="groupsidebarwrapper__top__button__icon"
            src={gearIconLight}
          />
        </button>
      </section>
      <section className="groupsidebarwrapper__bottom"></section>
    </section>
  );
}
