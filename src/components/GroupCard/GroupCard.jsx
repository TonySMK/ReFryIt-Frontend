import "./GroupCardStyles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GroupCard({ groupData, closeGroupModaldhandle }) {
  return (
    <Link to={`/home/group/${groupData.id}`}>
      <button
        onClick={() => closeGroupModaldhandle()}
        className="grouptitlebutton"
      >
        {groupData.keyword}
      </button>
    </Link>
  );
}
