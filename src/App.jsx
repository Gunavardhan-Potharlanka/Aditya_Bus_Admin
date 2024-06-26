import React, { useContext } from "react";
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
import ViewOperator from "./components/Operator/ViewOperator";
import Profile from "./components/Admin/Profile";
import Bus from "./pages/Bus";
import ViewStudent from "./components/Student/ViewStudent";
import Busdata from "./pages/Busdata";
import { useEffect } from "react";
import { BlackSheep } from "./pages/BlackSheep";
import Previous from "./pages/Previous";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Statistice />} />
          <Route path="addop" element={<AddOperator />} />
          <Route path="removeop" element={<DelOperator />} />
          <Route path="viewop" element={<ViewOperator />} />
          <Route path="addst" element={<AddStudent />} />
          <Route path="removest" element={<DelStudent />} />
          <Route path="viewst" element={<ViewStudent />} />
          <Route path="chgpsswd" element={<ChangePassword />} />
          <Route path="adpro" element={<Profile />} />
          <Route path="bus" element={<Bus />} />
          <Route path='busdata' element={<Busdata />} />
          <Route path="sheep"  element={<BlackSheep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
