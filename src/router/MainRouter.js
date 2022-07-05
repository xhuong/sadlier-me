import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RedirectLoginPage from "../components/RedirectLoginPage";
import LoginPage from "../pages/LoginPage";
import { SITE_MAP } from "../path";

function MainRouter() {
  console.log("main router...");

  return (
    <Router>
      <Switch>
        <Route path={SITE_MAP.INDEX} exact components={<RedirectLoginPage />} />
        <Route path={SITE_MAP.LOGIN} exact components={<LoginPage />} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
