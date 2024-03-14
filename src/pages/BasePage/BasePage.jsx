import "./BasePageStyles.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HighlightHolder from "../../components/HighlightHolder/HighlightHolder";
import GroupSideBar from "../../components/GroupSideBar/GroupSideBar";

export default function BasePage({ pageURL }) {
  return (
    <main>
      <Header />
      <HighlightHolder />
      <GroupSideBar />
      <Footer />
    </main>
  );
}
