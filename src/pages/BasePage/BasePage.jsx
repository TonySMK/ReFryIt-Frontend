import "./BasePageStyles.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HighlightHolder from "../../components/HighlightHolder/HighlightHolder";
import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";
import axios from "axios";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function BasePage({ pageURL }) {
  const domain = process.env.REACT_APP_Domain;
  const [compState, setCompState] = useState(true);
  const [highlightObject, setHighlightObject] = useState("");
  // const [starvalue, ]

  const { groupID } = useParams();
  const thePageAttribute = pageURL;

  function fetchHighlightData(somePageAttribute) {
    let finalURL;
    if (somePageAttribute === "favorite") {
      finalURL = `${domain}/api/highlights/filter/favorite/`;
    } else if (somePageAttribute === "group") {
      finalURL = `${domain}/api/highlights/filter/group/${groupID}`;
    } else if (somePageAttribute === "recent") {
      finalURL = `${domain}/api/highlights/filter/recent/`;
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

  function deleteHighlight(highlightObject) {
    // this function delete a highlight given a highlight
    axios.delete(`${domain}/api/highlights/${highlightObject.id}`).then(() => {
      fetchHighlightData(thePageAttribute);
    });
  }

  function updateStarStatus(highlightID, starValue) {
    let value;
    if (starValue === 1) {
      value = 0;
    } else {
      value = 1;
    }

    console.log("finally" + value);

    axios
      .patch(`${domain}/api/highlights/${highlightID}`, {
        star_status: value,
      })
      .then((res) => {
        fetchHighlightData(thePageAttribute);
        /* 
        MAGIC: i unable to reason why we need to the fetch
        function here in order to properly update the backend?

        b/c without it the actual "value" does not change...
        */

        console.log(res.data[0]);
      })
      .catch((error) => console.log(error));
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
              updateStarStatus={updateStarStatus}
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
