import React from "react";
import logo from "./assets/aditya-logo.png";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddOperator from "./components/Operator/AddOperator";
import ChangePassword from "./components/Admin/ChangePassword";
import Statistice from "./pages/Statistice";
import AddStudent from "./components/Student/AddStudent";
import DelStudent from "./components/Student/DelStudent";
import DelOperator from "./components/Operator/DelOperator";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Statistice />} />
          <Route path="addop" element={<AddOperator />} />
          <Route path="chgpsswd" element={<ChangePassword />} />
          <Route path="addst" element={<AddStudent />} />
          <Route path="removest" element={<DelStudent />} />
          <Route path="removeop" element={<DelOperator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
