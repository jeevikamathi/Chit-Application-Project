// // components/ProtectedRoute.js
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const ProtectedRoute = ({ children, requireOtp = false }) => {
//   const { isAuthenticated, otpVerified } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (requireOtp && !otpVerified) {
//     return <Navigate to="/otp" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
