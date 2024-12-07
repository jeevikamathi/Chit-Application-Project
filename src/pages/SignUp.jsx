import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Helper function to generate OTP
const generateOtp = () => {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

export default function SignUp() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [otpValid, setOtpValid] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    let interval;
    if (isOtpSent && timer > 0) {
      interval = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      setOtpValid(false); // OTP is no longer valid
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOtpSent, timer]);

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    const otp = generateOtp();
    setGeneratedOtp(otp);
    setIsOtpSent(true);
    setTimer(60);
    setIsResendDisabled(true);
    setOtpValid(true);
    alert(`Your OTP is: ${otp}`); // Simulating OTP sent
  };

  const handleResendOtp = () => handleSendOtp();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!otpValid) {
      alert('The OTP has expired. Please request a new one.');
      return;
    }
    if (otp === generatedOtp) {
      alert('Sign-up successful!');
      navigate('/dashboard');
      // Add your navigation or post-signup logic here
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign Up for an Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignUp} className="space-y-6">
         
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

       
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-900">
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                placeholder="Enter your 10-digit mobile number"
                pattern="[0-9]{10}"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          {isOtpSent && (
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-900">
                OTP
              </label>
              <div className="mt-2">
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  required
                  placeholder="Enter OTP sent to your mobile"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {otpValid
                  ? `OTP is valid. Resend in ${timer}s.`
                  : 'The OTP has expired. Please resend to get a new OTP.'}
              </p>
            </div>
          )}

          
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-900">
              Profile Picture (Optional)
            </label>
            <div className="mt-2">
              <input
                id="profilePicture"
                name="profilePicture"
                type="file"
                accept="image/*"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          {!isOtpSent ? (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send OTP
            </button>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className={`w-full rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm ${
                isResendDisabled
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              }`}
            >
              Resend OTP
            </button>
          )}

         
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
