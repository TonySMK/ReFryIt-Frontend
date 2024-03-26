import "./GroupSideBarStyles.scss";

import { useState, useEffect } from "react";
import axios from "axios";

import GroupCard from "../GroupCard/GroupCard";

import gearIconLight from "../../assets/icons/Gear-Icon-Clear-Background.png";
import gearIconDark from "../../assets/icons/Gear-Icon-White-Background.png";

export default function GroupSideBar({ closeGroupModalHandler }) {
  const [compState, setCompState] = useState(true);
  const [groupRenderList, setGroupRenderList] = useState(null);

  function fetchGroupList() {
    axios
      .get("http://localhost:8080/api/groups")
      .then((res) => {
        renderGroupList(res.data);
      })
      .catch((error) => console.log(error));
  }

  function renderGroupList(someData) {
    const groupRendering = someData.map((element) => {
      return (
        <GroupCard
          key={element.id}
          groupData={element}
          closeGroupModaldhandle={closeGroupModalHandler}
        />
      );
    });

    setGroupRenderList(groupRendering);
    setCompState(false);
  }

  useEffect(() => {
    fetchGroupList();
  }, []);
  return (
    <>
      {compState ? (
        <section>Loading Data...</section>
      ) : (
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
          <section className="groupsidebarwrapper__bottom">
            {groupRenderList}
          </section>
        </section>
      )}
    </>
  );
}
