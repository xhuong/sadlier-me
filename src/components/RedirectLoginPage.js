import { useSelector } from "react-redux";
import BackToLoginPage from "./BackToLoginPage";

function RedirectLoginPage() {
  console.log("redirect...");

  const isLogin = useSelector((state) => state.login.isLogin);
  if (!isLogin) {
    return <BackToLoginPage />;
  }
  return <BackToLoginPage />;
}

export default RedirectLoginPage;
