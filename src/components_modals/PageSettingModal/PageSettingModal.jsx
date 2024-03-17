import "./PageSettingModalStyles.scss";
import { createPortal } from "react-dom";
import { useState } from "react";

import closeIcon from "../../assets/icons/close-24px.svg";

export default function PageSettingModal({
  isSettingsModelOpen,
  closeSetingsModalHandler,
}) {
  let thebodyselector = document.getElementById("root");
  if (!isSettingsModelOpen) {
    thebodyselector.style.overflowY = "scoll";
    thebodyselector.style.height = "auto";
    return null;
  } else {
    thebodyselector.style.overflowY = "hidden";
    thebodyselector.style.height = "100vh";
  }

  return createPortal(
    <aside className="pagesettingsmodalwrapper">
      <section className="pagesettingsmodalwrapper__innerbody">
        {/* FIXME: fix the styling and implement the functionality of buttons */}
        <form>
          <section>
            <label>change site font</label>
            <button>-</button>
            <div>some font value</div>
            <button>+</button>
          </section>

          <section>
            <label>change background color</label>
            <select name="backgroundColor" id="backgroundColor">
              <option value="white">White</option>
              <option value="grey">Grey</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
            </select>
          </section>
        </form>
      </section>

      <button
        className="pagesettingsmodalwrapper__closebuttonwrapper"
        onClick={() => closeSetingsModalHandler()}
      >
        <img
          className="pagesettingsmodalwrapper__closebuttonwrapper__icon"
          src={closeIcon}
        />
      </button>
    </aside>,
    document.getElementById("settingsmodalcontainer")
  );
}
