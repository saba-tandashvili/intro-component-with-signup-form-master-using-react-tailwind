import "./App.css";
import { useState } from "react";
import erroricon from "./images/icon-error.svg";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const checker = () => {
    const errors = {
      firstName: firstName.trim() === "",
      lastName: lastName.trim() === "",
      email: email.trim() === "",
      password: password.trim() === "",
    };
    setErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleSubmit = () => {
    checker();
  };

  return (
    <>
      <div className="whole bg-[#FF7979] h-[100vh] flex justify-center items-center gap-[80px] bg-[url(./images/bg-intro-desktop.png)]">
        <div className="left flex flex-col ">
          <h1 className="text-[#fff] font-bold text-[50px]/[55px]">
            Learn to code by <br /> watching others
          </h1>
          <p className="text-[#fff] font-medium text-[16px]/[26px]">
            See how experienced developers solve problems in real-time. <br />{" "}
            Watching scripted tutorials is great, but understanding how <br />{" "}
            developers think is invaluable.{" "}
          </p>
        </div>

        <div className="right flex flex-col">
          <div className="ad w-[540px] h-[60px] bg-[#5E54A4] flex justify-center items-center rounded-[8px] mb-[20px] shadow-md/50">
            <p className="text-white">
              <span className="text-white font-bold">Try it free 7 days</span>{" "}
              then $20/mo. thereafter
            </p>
          </div>

          <div className="container flex flex-col justify-center items-center w-[540px] h-[474px] rounded-[10px] bg-white shadow-md/50">
            <div className="relative w-[460px] mb-[15px]">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`rounded-[5px] w-full h-[56px] pl-[30px] ${errors.firstName ? "border-2 border-[#FF7979]" : "border-1 border-[#DEDEDE] "}`}
              />
              <img
                src={erroricon}
                alt=""
                className={`absolute right-[20px] top-[50%] -translate-y-[50%] ${errors.firstName ? "" : "hidden"}`}
              />
            </div>
            <p
              className={`font-500 text-[11px] text-[#FF7979] -translate-y-3 translate-x-38 ${errors.firstName ? "" : "hidden"}`}
            >
              First name cannot be empty
            </p>

            <div className="relative w-[460px] mb-[15px]">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`rounded-[5px] w-full h-[56px] pl-[30px] ${errors.lastName ? "border-2 border-[#FF7979]" : "border-1 border-[#DEDEDE]"}`}
              />
              <img
                src={erroricon}
                alt=""
                className={`absolute right-[20px] top-[50%] -translate-y-[50%] ${errors.lastName ? "" : "hidden"}`}
              />
            </div>
            <p
              className={`font-500 text-[11px] text-[#FF7979] -translate-y-3 translate-x-38 ${errors.lastName ? "" : "hidden"}`}
            >
              Last name cannot be empty
            </p>

            <div className="relative w-[460px] mb-[15px]">
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-[5px] w-full h-[56px] pl-[30px] ${errors.email ? "border-2 border-[#FF7979]" : "border-1 border-[#DEDEDE]"}`}
              />
              <img
                src={erroricon}
                alt=""
                className={`absolute right-[20px] top-[50%] -translate-y-[50%] ${errors.email ? "" : "hidden"}`}
              />
            </div>
            <p
              className={`font-500 text-[11px] text-[#FF7979] -translate-y-3 translate-x-38 ${errors.email ? "" : "hidden"}`}
            >
              Looks like this is not an email
            </p>

            <div className="relative w-[460px] mb-[15px]">
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-[5px] w-full h-[56px] pl-[30px] ${errors.password ? "border-2 border-[#FF7979]" : "border-1 border-[#DEDEDE]"}`}
              />
              <img
                src={erroricon}
                alt=""
                className={`absolute right-[20px] top-[50%] -translate-y-[50%] ${errors.password ? "" : "hidden"}`}
              />
            </div>
            <p
              className={`font-500 text-[11px] text-[#FF7979] -translate-y-3 translate-x-38 ${errors.password ? "" : "hidden"}`}
            >
              Password cannot be empty
            </p>
            <button
              onClick={handleSubmit}
              className="bg-[#38CC8B] text-white w-[460px] h-[56px] rounded-[5px] text-[15px]/[26px] tracking-[1px] font-[600] cursor-pointer hover:bg-[#77E2B3] duration-150"
            >
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-[#BAB7D4] text-[11px]/[26px] font-[500] ">
              By clicking the button, you are agreeing to our{" "}
              <span className="font-[700] text-[#FF7979] cursor-pointer">
                Terms and Services
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
