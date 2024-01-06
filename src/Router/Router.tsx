import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { RootState } from "../redux/config/configStore";
function Router() {
  const isLogin = useSelector((state: RootState) => state.authSlice.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
