import "./BasePageStyles.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HighlightHolder from "../../components/HighlightHolder/HighlightHolder";
import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";

import { useParams, useLocation } from "react-router-dom";

export default function BasePage({ pageURL }) {
  const { groupID } = useParams();
  const location = useLocation();
  console.log(groupID);
  // console.log(window.location.pathname);
  console.log(location);
  console.log(location.pathname);
  function fetch(somePageAttribute) {}

  return (
    <main>
      <Header />
      <div>
        <HighlightHolder />
        <aside className="groupsidebarvisibilitywrapper">
          <GroupSideBar />
        </aside>
      </div>
      <Footer />
    </main>
  );
}
