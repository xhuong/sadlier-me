import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "./features/login/loginSlice";
import MainRouter from "./router/MainRouter";
import "./styles.css";

export default function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin && localStorage.getItem("isLogin")) {
      const payload = {
        isLogin: !!localStorage.getItem("isLogin")
      };
      dispatch(setLogin(payload));
    }
  }, []);

  return <MainRouter />;
}
