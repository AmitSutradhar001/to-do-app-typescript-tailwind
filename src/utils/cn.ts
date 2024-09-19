import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  const mergedClasses = twMerge(clsx(inputs));
  console.log(mergedClasses); // Debugging: log the final merged class names
  return mergedClasses;
};
