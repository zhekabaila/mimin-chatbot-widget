import { useState } from "react";
import AuthSigninSection from "./AuthSigninSection";
import AuthCreateAccountSection from "./AuthCreateAccountSection";

const AuthWindow = () => {
  const [step, setStep] = useState<
    "landing-section" | "sign-in" | "create-account"
  >("landing-section");

  return (
    <div className="p-4 h-full overflow-y-auto">
      <img
        src="https://res.cloudinary.com/dctqloe37/image/upload/v1752455653/undraw_chat_qmyo_1_wwzcjj.svg"
        alt=" "
        width={1000}
        height={1000}
        loading="lazy"
        className="w-full h-auto object-contain object-center"
      />
      {step === "landing-section" && (
        <div className="text-center mt-10">
          <h1 className="text-[#0096A2] text-base font-bold">
            Explore the MIMIN AI Agent
          </h1>
          <p className="text-gray-500 text-sm">
            Sign in and start chatting with your smart AI assistant ready to
            help anytime, day or night!
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <button
              className="bg-[#0096A2] w-full border border-[#0096A2] text-white px-4 py-2 rounded-md cursor-pointer"
              onClick={() => setStep("sign-in")}
            >
              Sign In
            </button>
            <button
              className="bg-white w-full border border-[#0096A2] text-[#0096A2] px-4 py-2 rounded-md cursor-pointer hover:bg-[#0096A2] hover:text-white transition-all duration-300"
              onClick={() => setStep("create-account")}
            >
              Create Account
            </button>
          </div>
        </div>
      )}
      {step === "sign-in" && (
        <AuthSigninSection
          onClickCreateAccount={() => setStep("create-account")}
        />
      )}
      {step === "create-account" && (
        <AuthCreateAccountSection onClickSignin={() => setStep("sign-in")} />
      )}
    </div>
  );
};

export default AuthWindow;
