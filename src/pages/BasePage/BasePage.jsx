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

  function addFavorite(highlightObject) {
    // we need some way toggle the state of the favorite value
    let somevalue;

    if (highlightObject.star_status === 1) {
      somevalue = 0;
    } else somevalue = 1;

    axios
      .patch(`${domain}/api/highlights/${highlightObject.id}`, {
        star_status: somevalue,
      })
      .then(() => {
        fetchHighlightData(thePageAttribute);
      });
    // this function changes the favorite state of a given highlight
  }

  function deleteHighlight(highlightObject) {
    // this function delete a highlight given a highlight
    axios.delete(`${domain}/api/highlights/${highlightObject.id}`).then(() => {
      fetchHighlightData(thePageAttribute);
    });
  }

  function addNewNote() {}

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
