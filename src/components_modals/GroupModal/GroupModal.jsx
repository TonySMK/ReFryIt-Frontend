import "./GroupModalStyles.scss";
import { createPortal } from "react-dom";
import { useState } from "react";

import closeIcon from "../../assets/icons/close-24px.svg";
import gearIconLight from "../../assets/icons/Gear-Icon-White-Background.png";

import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";

export default function GroupModal({
  isGroupModelOpen,
  closeGroupModalHandler,
}) {
  let thebodyselector = document.getElementById("root");
  if (!isGroupModelOpen) {
    thebodyselector.style.overflowY = "scoll";
    thebodyselector.style.height = "auto";
    return null;
  } else {
    thebodyselector.style.overflowY = "hidden";
    thebodyselector.style.height = "100vh";
  }

  return createPortal(
    <>
      <aside className="groupmodalwrapper">
        <section className="groupmodalwrapper__grouplistwrapper">
          <GroupSideBar closeGroupModalHandler={closeGroupModalHandler} />
          <button
            className="groupmodalwrapper__closebuttonwrapper"
            onClick={() => closeGroupModalHandler()}
          >
            <img
              className="groupmodalwrapper__closebuttonwrapper__icon"
              src={closeIcon}
            />
          </button>
        </section>
      </aside>
    </>,
    document.getElementById("groupmodalcontainer")
  );
}
