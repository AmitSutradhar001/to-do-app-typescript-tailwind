import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn.ts";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ className, ...props }: InputProps) => {
  return <input {...props} className={cn(buttonStyles(), className)} />;
};

export default FormInput;

const buttonStyles = cva("py-2 px-4 border border-2 rounded-md outline-none");
