import { Info } from "lucide-react";
import { useState } from "react";

interface FieldInfoProps {
  /** Texto explicativo exibido ao passar o mouse / focar o ícone. */
  text: string;
}

/**
 * Ícone de informação ("i" dentro de um círculo) com tooltip. Usado ao lado do
 * label de um campo para explicar como o dado será utilizado.
 */
export const FieldInfo = ({ text }: FieldInfoProps) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        aria-label={text}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
        className="text-neutral-500 hover:text-neutral-300 focus:text-neutral-300 outline-none transition-colors"
      >
        <Info size={14} />
      </button>

      {open && (
        <span
          role="tooltip"
          className="absolute right-0 bottom-full mb-2 z-20 w-56 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs leading-relaxed text-neutral-300 shadow-lg font-inter"
        >
          {text}
        </span>
      )}
    </span>
  );
};
