import { useState } from "react";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";
import { useConfigStore } from "../../hooks/config-store";

interface IProps {
  onSuccessLogin: (token: string, phone: { name: string, value: string }) => void;
}

function AuthWindow({ onSuccessLogin }: IProps) {
  const [step, setStep] = useState<"landing-section" | "sign-in" | "create-account">("landing-section");
  const { config } = useConfigStore();

  return (
    <div
      className="mimin-w-full mimin-h-full mimin-p-4 mimin-flex mimin-flex-col mimin-justify-center mimin-items-center"
      style={{ backgroundColor: config?.theme?.chatWindow.greating?.color }}
    >
      <div className="mimin-p-4 sm:mimin-p-10 mimin-max-w-xl mimin-mx-auto mimin-bg-white mimin-rounded-lg mimin-shadow-lg">
        {step === "landing-section" && (
          <div className="mimin-text-center mimin-space-y-3">
            {config?.theme?.chatWindow.header?.avatarSrc && (
              <img
                src={config.theme.chatWindow.header.avatarSrc}
                alt="logo"
                className="mimin-w-20 mimin-aspect-[4/3] mimin-object-cover mimin-bg-gray-100 mimin-text-gray-500 mimin-text-xs mimin-mx-auto mimin-rounded-lg mimin-overflow-hidden"
              />
            )}
            <h1
              className="mimin-text-xl mimin-font-bold"
              style={{
                color: config?.theme?.chatWindow.greating?.color,
              }}
            >
              Explore the {config?.theme?.chatWindow.header?.title}
            </h1>
            <p className="mimin-text-gray-500">
              Sign in and start chatting with your smart AI assistant ready to
              help anytime, day or night!
            </p>
            <div className="mimin-flex mimin-flex-col mimin-gap-3 mimin-pt-4">
              <button
                className="mimin-text-sm mimin-text-white mimin-w-full mimin-px-4 mimin-py-2 mimin-rounded-md mimin-cursor-pointer mimin-hover:opacity-90 mimin-transition"
                onClick={() => setStep("sign-in")}
                style={{
                  backgroundColor: config?.theme?.chatWindow.greating?.color,
                  color: config?.theme?.chatWindow.greating?.title || "white",
                }}
              >
                Sign In
              </button>
              {config?.theme?.chatWindow.enableRegister && (
                <button
                  className="mimin-text-sm mimin-w-full mimin-px-4 mimin-py-2 mimin-border mimin-rounded-md mimin-cursor-pointer mimin-hover:opacity-90 mimin-transition"
                  onClick={() => setStep("create-account")}
                  style={{
                    borderColor: config?.theme?.chatWindow.greating?.color,
                    color: config?.theme?.chatWindow.greating?.color,
                  }}
                >
                  Create Account
                </button>
              )}
            </div>
          </div>
        )}
        {step === "sign-in" && (
          <LoginSection
            onClickCreateAccount={() => setStep("create-account")}
            onSuccessLogin={onSuccessLogin}
          />
        )}
        {step === "create-account" && (
          <RegisterSection onClickSignin={() => setStep("sign-in")} />
        )}
      </div>
    </div>
  );
};

export default AuthWindow;
