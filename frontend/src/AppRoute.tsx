import { Navigate, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

const AppRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoute;
