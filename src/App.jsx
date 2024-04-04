import "./AppStyles.scss";
import BasePage from "./pages/BasePage/BasePage";
import InformationPage from "./pages/InformationPage/InformationPage";
import LogStatusPage from "./pages/LogStatusPage/LogStatusPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  console.log(process.env.REACT_APP_Domain);
  return (
    <div className="AppWrapper">
      <Routes>
        <Route path="/" element={<LogStatusPage />} />
        <Route path="/home/recent" element={<BasePage pageURL="recent" />} />
        <Route
          path="/home/favorites"
          element={<BasePage pageURL="favorite" />}
        />
        <Route
          path="/home/group/:groupID"
          element={<BasePage pageURL="group" />}
        />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/logout" element={<LogStatusPage />} />
      </Routes>
    </div>
  );
}
