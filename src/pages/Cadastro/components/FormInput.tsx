import { Eye, EyeOff } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  registration?: UseFormRegisterReturn;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  type?: "text" | "email" | "password";
  inputMode?: "text" | "numeric" | "tel" | "email";
  maxLength?: number;
  placeholder?: string;
  hint?: string;
  showPasswordToggle?: boolean;
  passwordVisible?: boolean;
  onTogglePassword?: () => void;
  disabled?: boolean;
  optional?: boolean;
}

export const FormInput = ({
  id,
  label,
  registration,
  value,
  onChange,
  error,
  type = "text",
  inputMode,
  maxLength,
  placeholder,
  hint,
  showPasswordToggle = false,
  passwordVisible = false,
  onTogglePassword,
  disabled = false,
  optional = false,
}: FormInputProps) => {
  const inputType = showPasswordToggle ? (passwordVisible ? "text" : "password") : type;

  const inputProps = registration
    ? { ...registration }
    : { value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value) };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-sm font-medium text-neutral-300 font-inter"
        >
          {label}
        </label>
        {optional && (
          <span className="text-xs text-neutral-500">Opcional</span>
        )}
      </div>

      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          inputMode={inputMode}
          maxLength={maxLength}
          autoComplete={type === "email" ? "email" : type === "password" ? "new-password" : "off"}
          className={[
            "w-full bg-neutral-900 border rounded-xl px-4 py-3 text-white text-sm font-inter",
            "placeholder-neutral-600 transition-all duration-200 outline-none",
            "focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            showPasswordToggle ? "pr-11" : "",
            error
              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/20"
              : "border-neutral-700 hover:border-neutral-600",
          ]
            .filter(Boolean)
            .join(" ")}
          {...inputProps}
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
          >
            {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {hint && !error && (
        <p className="text-xs text-neutral-500">{hint}</p>
      )}

      {error && (
        <p className="text-xs text-red-400">{error}</p>
      )}
    </div>
  );
};
