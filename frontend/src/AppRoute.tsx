import { Navigate, Route, Routes } from "react-router-dom";
import "./global.css";

const AppRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<p className="text-2xl font-bold">This is home</p>}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;
