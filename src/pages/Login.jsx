
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const generateOtp = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const otp = generateOtp();
    setGeneratedOtp(otp);
    setIsOtpSent(true);
    alert(`Your OTP is: ${otp}`);
    navigate("/otp", { state: { mobile, otp } }); 
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label
              htmlFor="mobile"
              className="block text-lg font-medium text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                autoComplete="tel"
                pattern="[0-9]{10}"
                placeholder="Enter your 10-digit mobile number"
                className="block w-full rounded-xl border-2 border-gray-300 py-2 text-lg pl-4 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-200 sm:text-lg" // className="block w-full rounded-xl border-2 border-gray-300 py-3 text-lg pl-5 text-gray-900 shadow-sm focus:border-sky-200 focus:ring-2 focus:ring-inset focus:ring-sky-200 placeholder:text-gray-500 sm:text-lg"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSendOtp}
              className="flex w-full rounded-xl justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
