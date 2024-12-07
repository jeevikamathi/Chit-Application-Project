import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OtpPage from "./pages/OtpPage";
import Layout from "./pages/Layout";
import Chit from "./pages/Chit";
import Dashboard from "./Pages/Dashboard";
import Members from "./pages/Members";
import CreateForm from "./pages/CreateForm";
import ChitForm from "./pages/Chitform";
import Chitformtable from "./pages/Chitformtable";
import ChitDetailPage from "./pages/ChitDetailPage";
import ChitPayment from "./pages/PaymentForm";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/createform" element={<CreateForm />} />
          <Route path="/chit" element={<Chit />} />
          <Route path="/chit/chitform" element={<ChitForm />} />
          <Route path="/chitform/chitformtable" element={<Chitformtable />} />
          <Route path="/chit/chitdetailpage" element={<ChitDetailPage />} />
          <Route path="/chit/chitpayment" element={<ChitPayment/>} />
        </Route>
      </Routes>
    </Router>
  );
}
