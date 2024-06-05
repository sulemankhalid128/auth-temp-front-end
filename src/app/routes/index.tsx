import React, { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import { getToken } from "../utils";
import MainPage from "../components/main/MainPage";
import { PrivateRoute } from "./PrivateRoute";

const MainRoutes: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {!getToken() && (
          <Route path={"/"} element={<Navigate replace to={"/auth/login"} />} />
        )}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
        <Route
          path="main"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
