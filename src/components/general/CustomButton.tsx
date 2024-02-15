import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../helpers/helpers";
import { motion } from "framer-motion";
import { VariantProps, cva } from "class-variance-authority";

const variants = cva(
  "flex items-center justify-center px-2 py-1 rounded-md shadow-sm transition-colors text-center mx-auto font-accent uppercase transition-opacity",
  {
    variants: {
      variant: {
        default:
          "from-action-400 to-action-500 hover:opacity-90 text-primary-950 bg-gradient-to-br",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  className?: string;
  children?: ReactNode;
  rounded?: boolean;
  disableScaleAnimation?: boolean;
}

function CustomButton({
  className,
  children,
  variant,
  rounded,
  disableScaleAnimation,
  ...props
}: Props) {
  return (
    <motion.button
      whileHover={disableScaleAnimation ? {} : { scale: 1.05 }}
      whileTap={disableScaleAnimation ? {} : { scale: 1.01 }}
      className=""
    >
      <button
        {...props}
        className={cn(
          variants({ variant, className }),
          `${rounded ? "rounded-full px-2 py-2 " : ""}`,
        )}
      >
        {children}
      </button>
    </motion.button>
  );
}

export default CustomButton;
