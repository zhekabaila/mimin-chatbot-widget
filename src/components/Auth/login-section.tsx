import { useState } from "react";
import { EyeIcon, EyeOffIcon, TriangleAlert } from "lucide-react";

interface IProps {
  onClickCreateAccount: () => void;
}

const LoginSection = ({ onClickCreateAccount }: IProps) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mimin-mt-10">
      <div className="mimin-space-y-2">
        <h2 className="mimin-text-base mimin-font-bold">Hi, Welcome Back!</h2>
        <p className="mimin-text-sm mimin-text-gray-500">
        Log in to access your account and continue your activity.
        </p>
      </div>
      <div className="mimin-space-y-2 mimin-mt-6">
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label htmlFor="email" className="mimin-text-sm mimin-font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
            className="mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2]"
          />
        </div>
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label htmlFor="password" className="mimin-text-sm mimin-font-medium">
            Password
          </label>
          <div className="mimin-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              className="mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2] mimin-w-full"
            />
            <button
              className="mimin-absolute mimin-right-2.5 mimin-top-1/2 -mimin-translate-y-1/2"
              onClick={() => setShowPassword((e) => !e)}
            >
              {showPassword ? (
                <EyeIcon className="mimin-w-4 mimin-h-4" />
              ) : (
                <EyeOffIcon className="mimin-w-4 mimin-h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="mimin-flex mimin-items-start mimin-justify-between mimin-gap-3 mimin-py-2">
          <div className="mimin-flex mimin-items-center mimin-gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              checked={form.rememberMe}
              onChange={(e) =>
                setForm({ ...form, rememberMe: e.target.checked })
              }
              className="mimin-size-3.5 mimin-accent-[#0096A2]"
            />

            <label
              className="mimin-block mimin-text-xs mimin-text-gray-500"
              htmlFor="acceptTerms"
            >
              Remember me
            </label>
          </div>
          <button className="mimin-block mimin-text-xs mimin-text-gray-500 mimin-cursor-pointer mimin-underline">
            Forgot password?
          </button>
        </div>
        {errorMessage && (
          <div className="mimin-flex mimin-items-start mimin-gap-3 mimin-bg-[#F26075]/10 mimin-p-2 mimin-rounded-md mimin-mt-5 mimin-border mimin-border-[#F26075]/20">
            <div className="mimin-flex mimin-items-start mimin-justify-center mimin-pt-1">
              <TriangleAlert className="mimin-w-4 mimin-h-4 mimin-text-[#F26075]" />
            </div>
            <p className="mimin-text-[#F26075] mimin-text-sm">{errorMessage}</p>
          </div>
        )}
        <div className="mimin-flex mimin-flex-col mimin-gap-1.5 mimin-pt-4 mimin-pb-6">
          <button className="mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed">
            Sign In
          </button>
          <div className="mimin-text-xs mimin-text-center mimin-text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={onClickCreateAccount}
              className="mimin-inline mimin-text-[#0096A2] mimin-underline mimin-cursor-pointer"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
