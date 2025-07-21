import { useState } from "react";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";

const AuthWindow = () => {
  const [step, setStep] = useState<
    "landing-section" | "sign-in" | "create-account"
  >("create-account");

  return (
    <div className="mimin-p-4 mimin-h-full mimin-overflow-y-auto">
      {/* <div className="mimin-flex mimin-justify-center mimin-items-center mimin-w-full mimin-h-auto"> */}
      {/* <img
          src="https://res.cloudinary.com/dctqloe37/image/upload/v1752455653/undraw_chat_qmyo_1_wwzcjj.svg"
          alt=" "
          width={1000}
          height={1000}
          loading="lazy"
          className="mimin-w-full mimin-h-auto mimin-object-contain mimin-object-center"
        /> */}
      {/* </div> */}
      {/* {step === "landing-section" && (
        <div className="mimin-text-center mimin-mt-10">
          <h1 className="mimin-text-[#0096A2] mimin-text-base mimin-font-bold">
            Explore the MIMIN AI Agent
          </h1>
          <p className="mimin-text-gray-500 mimin-text-sm">
            Sign in and start chatting with your smart AI assistant ready to
            help anytime, day or night!
          </p>
          <div className="mimin-flex mimin-flex-col mimin-gap-3 mimin-mt-6">
            <button
              className="mimin-bg-[#0096A2] mimin-w-full mimin-border mimin-border-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-cursor-pointer"
              onClick={() => setStep("sign-in")}
            >
              Sign In
            </button>
            <button
              className="mimin-bg-white mimin-w-full mimin-border mimin-border-[#0096A2] mimin-text-[#0096A2] mimin-px-4 mimin-py-2 mimin-rounded-md mimin-cursor-pointer mimin-hover:bg-[#0096A2] mimin-hover:text-white mimin-transition-all mimin-duration-300"
              onClick={() => setStep("create-account")}
            >
              Create Account
            </button>
          </div>
        </div>
      )} */}
      {step === "sign-in" && (
        <LoginSection onClickCreateAccount={() => setStep("create-account")} />
      )}
      {step === "create-account" && (
        <RegisterSection onClickSignin={() => setStep("sign-in")} />
      )}
    </div>
  );
};

export default AuthWindow;
