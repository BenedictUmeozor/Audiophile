import Input from "@/components/ui/input";
import { cn } from "@/utils";
import { FieldError, UseControllerProps } from "react-hook-form";

interface FormFieldProps extends UseControllerProps {
  label: string;
  error?: FieldError;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormField({
  label,
  error,
  placeholder,
  type = "text",
  className,
  field,
}: FormFieldProps & { field: any }) {
  const fieldId = field.name;
  const errorId = `${fieldId}-error`;

  return (
    <div className={cn("space-y-[9px]", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={fieldId}
          className={cn(
            "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
            error && "text-danger",
          )}
        >
          {label}
        </label>
        {error && (
          <span
            className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]"
            id={errorId}
            role="alert"
          >
            {error.message}
          </span>
        )}
      </div>
      <Input
        {...field}
        id={fieldId}
        type={type}
        error={!!error}
        placeholder={placeholder}
        aria-describedby={error ? errorId : undefined}
        aria-required="true"
      />
    </div>
  );
}
