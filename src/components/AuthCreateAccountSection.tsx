import { EyeIcon, EyeOffIcon, TriangleAlert } from "lucide-react";
import { useState } from "react";

interface IProps {
  onClickSignin: () => void;
}

const AuthCreateAcoountSection = ({ onClickSignin }: IProps) => {
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

  console.log(form);

  return (
    <div className="mt-10">
      <div className="space-y-2">
        <h2 className="text-base font-bold">Create Account</h2>
        <p className="text-sm text-gray-500">
          Fill your information below to create your account
        </p>
      </div>
      <div className="space-y-2 mt-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="companyName" className="text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            autoComplete="off"
            className="border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
            className="border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              className="border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            />
            <button
              className="absolute right-2.5 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword((e) => !e)}
            >
              {showPassword ? (
                <EyeIcon className="w-4 h-4" />
              ) : (
                <EyeOffIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
              className="border border-[#0096A2] rounded-md p-2 focus:outline focus:outline-2 focus:outline-[#0096A2] w-full"
            />
            <button
              className="absolute right-2.5 top-1/2 -translate-y-1/2"
              onClick={() => setShowConfirmPassword((e) => !e)}
            >
              {showConfirmPassword ? (
                <EyeIcon className="w-4 h-4" />
              ) : (
                <EyeOffIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-start gap-3 py-2">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            checked={form.acceptTerms}
            onChange={(e) =>
              setForm({ ...form, acceptTerms: e.target.checked })
            }
            className="mt-1 size-3.5 accent-[#0096A2]"
          />

          <label className="block text-xs text-gray-500" htmlFor="acceptTerms">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-[#0096A2]">
              Terms of Service
            </a>
          </label>
        </div>
        {errorMessage && (
          <div className="flex items-start gap-3 bg-[#F26075]/10 p-2 rounded-md mt-5 border border-[#F26075]/20">
            <div className="flex items-start justify-center pt-1">
              <TriangleAlert className="w-4 h-4 text-[#F26075]" />
            </div>
            <p className="text-[#F26075] text-sm">{errorMessage}</p>
          </div>
        )}
        <div className="flex flex-col gap-1 pb-6">
          <button
            className="bg-[#0096A2] text-white px-4 py-2 rounded-md w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div className="text-xs text-center text-gray-500">
            Already have an account?{" "}
            <button
              onClick={onClickSignin}
              className="inline text-[#0096A2] underline cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCreateAcoountSection;
