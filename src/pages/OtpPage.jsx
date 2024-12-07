import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { mobile, otp } = location.state || {}; 
  const [enteredOtp, setEnteredOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30); 
  const [canResend, setCanResend] = useState(false); 
  const inputRefs = useRef([]);

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true); 
    }
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleChange = (value, index) => {
    const updatedOtp = [...enteredOtp];
    updatedOtp[index] = value;
    setEnteredOtp(updatedOtp);

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !enteredOtp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtpString = enteredOtp.join("");

    if (enteredOtpString === otp) {
      alert("OTP verified successfully!");
      navigate("/dashboard"); 
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    setTimer(30); 
    setCanResend(false); 
    alert(`OTP resent to ${mobile}`); 
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          OTP Verification
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          OTP sent to: <strong>{mobile}</strong>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="otp"
              className="block text-lg font-medium text-gray-900"
            >
              Enter OTP
            </label>
            <div className="mt-4 flex justify-center gap-2">
              {enteredOtp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="block w-full rounded-xl border-2 border-gray-300 py-2 text-lg pl-4 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 sm:text-lg"
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Please enter the 6-digit OTP sent to your number.
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full rounded-xl justify-center bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Verify OTP
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          {canResend ? (
            <button
              onClick={handleResendOtp}
              className="text-indigo-600 hover:text-indigo-500 font-semibold"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-sm text-gray-600">
              Resend OTP in {timer} seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
