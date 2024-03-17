import "./BasePageStyles.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HighlightHolder from "../../components/HighlightHolder/HighlightHolder";
import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";
import axios from "axios";
import { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";

export default function BasePage({ pageURL }) {
  const [compState, setCompState] = useState(true);
  const [highlightObject, setHighlightObject] = useState("");

  const { groupID } = useParams();
  // const location = useLocation();
  const thePageAttribute = pageURL;
  // console.log(groupID);
  // console.log(window.location.pathname);
  // console.log(location);
  // console.log(location.pathname);

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
        // console.log(res.data);
        setHighlightObject(res.data);
        setCompState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deletehandler(highlightid) {
    axios
      .delete(`http://localhost:8080/api/highlights/${highlightid}`)
      .then((res) => {
        console.log(res.data);
        fetchHighlightData(thePageAttribute);
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
            <HighlightHolder
              object={highlightObject}
              deletehandler={deletehandler}
            />
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
