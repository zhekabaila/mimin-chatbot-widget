import { useState } from "react";
import { EyeIcon, EyeOffIcon, LoaderCircle, TriangleAlert } from "lucide-react";
import { isAxiosError } from "axios";
import { API } from "../../services";
import { useConfigStore } from "../../hooks/config-store";

interface IProps {
  onClickCreateAccount: () => void;
  onSuccessLogin: (token: string, phone: { name: string, value: string }) => void;
}

const LoginSection = ({ onClickCreateAccount, onSuccessLogin }: IProps) => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { config } = useConfigStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Phone validation function
  const isValidPhone = (phone: string): boolean => {
    // International phone number validation (7-15 digits, may start with +)
    const phoneRegex = /^(\+)?[0-9]{6,14}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error
    setErrorMessage(null);

    // Validate phone
    if (!form.phone.trim()) {
      setErrorMessage("Phone number is required");
      return;
    }

    if (!isValidPhone(form.phone)) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }

    // Validate password
    if (!form.password) {
      setErrorMessage("Password is required");
      return;
    }

    if (form.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Add loading state
    setLoading(true);

    // Call API
    API('axios', 'customer')({
      url: `/v1/customer/login/${config?.credentials?.username}`,
      method: 'POST',
      data: {
        phone: form.phone,
        password: form.password
      },
      headers: {
        "x-api-key": config?.credentials?.apiKey,
      },
    })
      .then((res) => {
        localStorage.setItem(`mimin-token-${config?.credentials?.username}`, res.data.token)
        const phone = { name: res.data.data.name, value: res.data.data.name };
        onSuccessLogin(res.data.token, phone)
      })
      .catch((error) => {
        if (isAxiosError(error) && (error.status === 400)) {
          setErrorMessage(error.response?.data.message);
        } else {
          setErrorMessage((error as Error).message);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="mimin-w-full mimin-text-gray-700">
      {config?.theme?.chatWindow.header?.avatarSrc && (
        <img
          src={config.theme.chatWindow.header.avatarSrc}
          alt="logo"
          className="mimin-w-20 mimin-aspect-[4/3] mimin-object-cover mimin-bg-gray-100 mimin-text-gray-500 mimin-text-xs mimin-mx-auto mimin-rounded-lg mimin-overflow-hidden"
        />
      )}
      <div className="mimin-space-y-2 mimin-mt-4">
        <h2 className="mimin-text-lg mimin-font-bold">Sign In</h2>
        <p className="mimin-text-sm mimin-text-gray-500">
          Fill your information below to sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mimin-space-y-2 mimin-mt-6">
        <div className="mimin-flex mimin-flex-col mimin-gap-1">
          <label htmlFor="phone" className="mimin-text-sm mimin-font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Type phone number... (e.g. 08123456789)"
            className="mimin-text-sm mimin-rounded-md mimin-p-2 mimin-focus:outline mimin-focus:outline-1"
            style={{
              border: `1px solid ${config?.theme?.chatWindow?.greating?.color || "#0096A2"}`,
              outlineColor: config?.theme?.chatWindow?.greating?.color || "#0096A2",
            }}
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
              id="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Type password..."
              className="mimin-text-sm mimin-rounded-md mimin-p-2 mimin-w-full mimin-focus:outline mimin-focus:outline-1"
              style={{
                border: `1px solid ${config?.theme?.chatWindow?.greating?.color || "#0096A2"}`,
                outlineColor: config?.theme?.chatWindow?.greating?.color || "#0096A2",
              }}
            />
            <button
              type="button"
              className="mimin-absolute mimin-right-2.5 mimin-top-1/2 mimin--translate-y-1/2"
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

        <div className="mimin-flex mimin-flex-col mimin-gap-4 mimin-pt-2">
          {errorMessage && (
            <div className="mimin-flex mimin-items-start mimin-gap-3 mimin-bg-[#F26075]/10 mimin-p-2 mimin-rounded-md mimin-border mimin-border-[#F26075]/20">
              <div className="mimin-flex mimin-items-start mimin-justify-center mimin-pt-1">
                <TriangleAlert className="mimin-w-4 mimin-h-4 mimin-text-[#F26075]" />
              </div>
              <p className="mimin-text-[#F26075] mimin-text-sm">{errorMessage}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mimin-text-white mimin-text-sm mimin-px-4 mimin-py-2 mimin-rounded-md mimin-w-full mimin-flex mimin-justify-center mimin-items-center mimin-gap-2 mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed mimin-transition-opacity"
            style={{
              backgroundColor: config?.theme?.chatWindow.greating?.color || "#0096A2",
              color: config?.theme?.chatWindow.greating?.title || "white",
            }}
          >
            {loading && <LoaderCircle className="mimin-w-4 mimin-h-4 mimin-animate-spin" />}
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {config?.theme?.chatWindow.enableRegister && (
            <div className="mimin-text-sm mimin-text-center mimin-text-gray-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onClickCreateAccount}
                className="mimin-inline mimin-text-[#0096A2] mimin-underline mimin-cursor-pointer"
              >
                Create an account
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
