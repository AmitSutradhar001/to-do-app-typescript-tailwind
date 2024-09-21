import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn.ts";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ className, ...props }: InputProps) => {
  return <input {...props} className={cn(buttonStyles(), className)} />;
};

export default FormInput;

const buttonStyles = cva(
  "py-2 px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none"
);
