// // components/AuthContext.js
// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Login state
//   const [otpVerified, setOtpVerified] = useState(false); // OTP verification state

//   const login = () => setIsAuthenticated(true);
//   const verifyOtp = () => setOtpVerified(true);
//   const logout = () => {
//     setIsAuthenticated(false);
//     setOtpVerified(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         otpVerified,
//         login,
//         verifyOtp,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
