import "./BasePageStyles.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HighlightHolder from "../../components/HighlightHolder/HighlightHolder";
import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";
import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function BasePage({ pageURL }) {
  const [compState, setCompState] = useState(true);
  const [highlightObject, setHighlightObject] = useState("");

  const { groupID } = useParams();
  const thePageAttribute = pageURL;

  function fetchHighlightData(somePageAttribute) {
    let finalURL;
    if (somePageAttribute === "favorite") {
      finalURL = "http://localhost:8080/api/highlights/filter/favorite/";
    } else if (somePageAttribute === "group") {
      finalURL = `http://localhost:8080/api/highlights/filter/group/${groupID}`;
    } else if (somePageAttribute === "recent") {
      finalURL = `http://localhost:8080/api/highlights/filter/recent/`;
    }

    axios
      .get(finalURL)
      .then((res) => {
        setHighlightObject(res.data);
        setCompState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchHighlightData(thePageAttribute);
  }, [pageURL, groupID]);

  return (
    <>
      {compState ? (
        <section>Loading Data...</section>
      ) : (
        <main>
          <Header />
          <div>
            <HighlightHolder object={highlightObject} />
            <aside className="groupsidebarvisibilitywrapper">
              <GroupSideBar />
            </aside>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
