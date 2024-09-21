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

const buttonStyles = cva("py-2 px-4 rounded-md font-semibold text-white w-32", {
  variants: {
    variant: {
      normal:
        "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
      submit:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
    },
  },
  defaultVariants: { variant: "normal" },
});
