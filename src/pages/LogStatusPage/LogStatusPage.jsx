import "./LogStatusPageStyles.scss";

import { Link } from "react-router-dom";

export default function LogStatusPage() {
  return (
    <section>
      <div>login logo/animation</div>
      <div>Welcome</div>
      <Link to="/home/recent">
        <button>Log-in</button>
      </Link>
    </section>
  );
}
