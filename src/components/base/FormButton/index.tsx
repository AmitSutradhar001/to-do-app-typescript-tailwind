import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn.ts";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "normal" | "submit";
};

const FormButton = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonStyles({ variant }), className)} />
  );
};

export default FormButton;

const buttonStyles = cva(
  "py-2 px-4 rounded-md font-semibold text-white hover:text-gray-900",
  {
    variants: {
      variant: {
        normal: "bg-blue-400 hover:opacity-50",
        submit: "bg-orange-400 hover:opacity-50",
      },
    },
    defaultVariants: { variant: "normal" },
  }
);
