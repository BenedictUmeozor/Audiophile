import { cn } from "@/utils";
import { ComponentProps } from "react";

const Checkbox = ({
  error,
  text,
  checked,
  onChange,
  ...props
}: ComponentProps<"input"> & { error?: boolean; text: string }) => {
  const handleClick = () => {
    if (onChange) {
      // Create a synthetic event to match the expected ChangeEvent type
      const syntheticEvent = {
        target: { checked: !checked },
        currentTarget: { checked: !checked },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div
      className={cn(
        "hover:border-primary flex h-14 cursor-pointer items-center gap-x-4 rounded-md border border-[#CFCFCF] px-4",
        error && "ring-danger ring-2",
      )}
      onClick={handleClick}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded-full border border-[#CFCFCF]",
        )}
        aria-hidden="true"
      >
        {checked && <div className="bg-primary h-2.5 w-2.5 rounded-full" />}
      </div>
      <span className="text-[14px] leading-[100%] font-bold tracking-[-0.21px]">
        {text}
      </span>
      <input
        type="checkbox"
        className="absolute h-0 w-0 opacity-0"
        {...props}
        checked={checked}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        tabIndex={-1}
      />
    </div>
  );
};

export default Checkbox;
