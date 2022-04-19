import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignInForm } from "../components/profile/sign-in-form";
import InfoTablePages from "../pages/info-table-pages/info-table-pages";
import ListInfoPage from "../pages/list-info-page/list-info-page";
import { PrivateRoute } from "../private-route/private-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<InfoTablePages />} />
        <Route path="/edit" element={<ListInfoPage />} />
      </Route>

      <Route path="/login" element={<SignInForm />} />
    </Routes>
  );
}

export default App;
