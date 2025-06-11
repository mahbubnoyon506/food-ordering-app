import { Navigate, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./layout/layout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>This is home</Layout>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;
