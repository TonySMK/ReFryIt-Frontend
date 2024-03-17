import "./HighlightHolderStyles.scss";
import HighlightCard from "../HighlightCard/HighlightCard";
import { useState, useEffect } from "react";

export default function HighlightHolder({ object }) {
  // basically we are going to give this component and object, which
  // it will map over and produce a list of highlight cards

  const [renderedHighlightList, setRenderedHighlightList] = useState("");

  function createListOfCards(someObject) {
    const cardList = someObject.map((element) => {
      return <HighlightCard key={element.id} highlightInfo={element} />;
    });
    setRenderedHighlightList(cardList);
  }

  useEffect(() => {
    createListOfCards(object);
  }, [object]);

  return <section>{renderedHighlightList}</section>;
}
