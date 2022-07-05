import { Redirect } from "react-router-dom";
import { SITE_MAP } from "../path";

function BackToLoginPage() {
  return <Redirect to={SITE_MAP.LOGIN} />;
}

export default BackToLoginPage;
