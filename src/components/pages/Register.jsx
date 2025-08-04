import { useState } from "react";

import googleIcon from "/assets/imgs/icon/icon-google.png";
import facebookIcon from "/assets/imgs/icon/icon-facebook.png";

import LoginCard from "../molecules/Login/LoginCard";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
    termCheck: false,
  });

  const emailRegex = /^.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s]).{8,}$/;

  // State untuk pesan error
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [termError, setTermError] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Validasi Email
    if (!emailRegex.test(formData.email)) {
      setEmailError("Email format not valid!");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validasi Password
    if (!passRegex.test(formData.pass)) {
      setPassError(
        "Password must contain upper, lower, special char & min 8 chars!"
      );
      isValid = false;
    } else {
      setPassError("");
    }

    // Validasi Terms
    if (!formData.termCheck) {
      setTermError("You must agree to terms & conditions!");
      isValid = false;
    } else {
      setTermError("");
    }

    if (!isValid) return;

    // Ambil data user yang ada di localStorage
    const existingUsers = JSON.parse(localStorage.getItem("User")) || [];

    // Simpan user baru
    const newUser = {
      email: formData.email,
      pass: formData.pass,
    };
    existingUsers.push(newUser);
    localStorage.setItem("User", JSON.stringify(existingUsers));

    // Pesan sukses
    setRegisterStatus("Register success! You can login now.");

    // Reset form
    setFormData({
      email: "",
      pass: "",
      termCheck: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[url('../assets/imgs/log-in/background-login.png')] bg-no-repeat bg-cover bg-fixed bg-black/50 bg-blend-overlay font-[Mulish] text-center">
      <img
        src="../assets/imgs/logo/logo.png"
        alt="logo"
        className="mt-20 w-[17.25rem] h-[6.5rem]"
      />

      <main className="bg-white w-[34.125rem] h-full rounded-lg mt-[1.313rem] mb-[3.938rem] px-[73px] py-[35px] flex flex-col items-center">
        {/* Progress Indicator */}
        <div className="flex flex-row justify-between items-center gap-[27px] w-full">
          {["Fill Form", "Active", "Done"].map((label, i) => (
            <>
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-[1vh] grow"
              >
                <div
                  className={`w-[47px] h-[47px] rounded-full flex items-center justify-center text-white ${
                    i === 0 ? "bg-[#1D4ED8]" : "bg-[#A0A3BD]"
                  }`}
                >
                  <h1 className="text-base font-medium">{i + 1}</h1>
                </div>
                <p
                  className={`text-sm ${
                    i === 0 ? "font-semibold" : "font-light"
                  }`}
                >
                  {label}
                </p>
              </div>
              {i < 2 && (
                <hr className="w-[70px] border-t border-dashed border-[#A0A3BD]" />
              )}
            </>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full mt-[46px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col text-left w-full">
              <label
                htmlFor="email"
                className="text-[#4E4B66] text-base font-semibold pl-[25px]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-16 mt-3 px-[22px] text-[#A0A3BD] text-base font-normal border border-[#DEDEDE] rounded"
              />
              {emailError && (
                <p className="text-red-500 text-sm pl-[25px]">{emailError}</p>
              )}
            </div>

            <div className="flex flex-col text-left w-full">
              <label
                htmlFor="pass"
                className="text-[#4E4B66] text-base font-semibold pl-[25px]"
              >
                Password
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Enter your password"
                value={formData.pass}
                onChange={handleChange}
                className="w-full h-16 mt-3 px-[22px] text-[#A0A3BD] text-base font-normal border border-[#DEDEDE] rounded"
              />
              {passError && (
                <p className="text-red-500 text-sm pl-[25px]">{passError}</p>
              )}
            </div>

            <div className="relative flex items-center mt-[26px] pl-[25px]">
              <input
                type="checkbox"
                name="termCheck"
                id="termCheck"
                checked={formData.termCheck}
                onChange={handleChange}
                className="w-[18px] h-[18px] mr-2 accent-[#1D4ED8] absolute left-0 top-[3px]"
              />
              <label
                htmlFor="termCheck"
                className="pl-6 text-[#696F79] font-normal text-lg"
              >
                I agree to term & conditions
              </label>
            </div>
            {termError && (
              <p className="text-red-500 text-sm pl-[25px]">{termError}</p>
            )}

            <button
              type="submit"
              className="w-full h-16 bg-[#1D4ED8] text-[#F7F7FC] text-base font-bold rounded mt-[26px] hover:brightness-90 transition"
            >
              Join For Free Now
            </button>
            {registerStatus && (
              <h1 className="text-green-600 mt-4">{registerStatus}</h1>
            )}
          </form>
        </div>

        {/* Footer Section */}
        <div className="w-full mt-[26px]">
          <p className="font-[Inter] text-base font-medium text-[#696F79]">
            Already have an account?{" "}
            <a href="./login.html" className="text-[#1D4ED8]">
              Log in
            </a>
          </p>

          {/* Or Separator */}
          <div className="flex flex-row justify-between items-center w-full mt-[26px]">
            <hr className="w-[153px] border-t border-[#AAAAAA] opacity-25" />
            <p className="font-[Inter] text-xs font-normal text-[#AAAAAA]">
              Or
            </p>
            <hr className="w-[153px] border-t border-[#AAAAAA] opacity-25" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-row justify-between mt-[26px] text-center">
            <LoginCard src={googleIcon} alt="google-icon" content="Google" />
            <LoginCard
              src={facebookIcon}
              alt="facebook-icon"
              content="Facebook"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
