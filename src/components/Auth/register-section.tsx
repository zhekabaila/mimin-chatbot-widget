import { EyeIcon, EyeOffIcon, TriangleAlert } from "lucide-react";
import { useState } from "react";

interface IProps {
  onClickSignin: () => void;
}

const RegisterSection = ({ onClickSignin }: IProps) => {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="mimin-mt-10">
      <div className="mimin-space-y-2">
        <h2 className="mimin-text-base mimin-font-bold">Create Account</h2>
        <p className="mimin-text-sm mimin-text-gray-500">
          Fill your information below to create your account
        </p>
      </div>
      <div className="mimin-space-y-2 mimin-mt-6">
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label
            htmlFor="companyName"
            className="mimin-text-sm mimin-font-medium"
          >
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            autoComplete="off"
            className="mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2]"
          />
        </div>
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label htmlFor="email" className="mimin-text-sm mimin-font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
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
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label
            htmlFor="confirmPassword"
            className="mimin-text-sm mimin-font-medium"
          >
            Confirm Password
          </label>
          <div className="mimin-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
              className="mimin-border mimin-border-[#0096A2] mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-2 mimin-focus:outline-[#0096A2] mimin-w-full"
            />
            <button
              className="mimin-absolute mimin-right-2.5 mimin-top-1/2 -mimin-translate-y-1/2"
              onClick={() => setShowConfirmPassword((e) => !e)}
            >
              {showConfirmPassword ? (
                <EyeIcon className="mimin-w-4 mimin-h-4" />
              ) : (
                <EyeOffIcon className="mimin-w-4 mimin-h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="mimin-flex mimin-items-start mimin-gap-3 mimin-py-2">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={form.acceptTerms}
            onChange={(e) =>
              setForm({ ...form, acceptTerms: e.target.checked })
            }
            className="mimin-mt-1 mimin-size-3.5 mimin-accent-[#0096A2]"
          />

          <label
            className="mimin-block mimin-text-xs mimin-text-gray-500"
            htmlFor="acceptTerms"
          >
            By creating an account, you agree to our{" "}
            <a href="#" className="mimin-text-[#0096A2]">
              Terms of Service
            </a>
          </label>
        </div>
        {errorMessage && (
          <div className="mimin-flex mimin-items-start mimin-gap-3 mimin-bg-[#F26075]/10 mimin-p-2 mimin-rounded-md mimin-mt-5 mimin-border mimin-border-[#F26075]/20">
            <div className="mimin-flex mimin-items-start mimin-justify-center mimin-pt-1">
              <TriangleAlert className="mimin-w-4 mimin-h-4 mimin-text-[#F26075]" />
            </div>
            <p className="mimin-text-[#F26075] mimin-text-sm">{errorMessage}</p>
          </div>
        )}
        <div className="mimin-flex mimin-flex-col mimin-gap-1 mimin-pb-6">
          <button
            className="mimin-bg-[#0096A2] mimin-text-white mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed"
            disabled={
              !form.companyName ||
              !form.email ||
              !form.password ||
              !form.confirmPassword ||
              !form.acceptTerms
            }
          >
            Create Account
          </button>
          <div className="mimin-text-xs mimin-text-center mimin-text-gray-500">
            Already have an account?{" "}
            <button
              onClick={onClickSignin}
              className="mimin-inline mimin-text-[#0096A2] mimin-underline mimin-cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
