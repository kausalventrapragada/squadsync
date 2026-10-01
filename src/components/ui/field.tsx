import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string };

export function Field({ label, hint, id, ...props }: InputProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input className="input" id={id} {...props} />
      {hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  );
}

export function TextAreaField({ label, hint, id, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string }) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <textarea className="input textarea" id={id} {...props} />
      {hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  );
}
