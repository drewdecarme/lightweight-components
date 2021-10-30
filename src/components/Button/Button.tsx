import clsx from "clsx";
import React from "react";

import * as ButtonStyle from "./Button.modules.scss";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "text";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", className, children, ...restProps },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={clsx(className, {
          // @ts-ignore
          [ButtonStyle.primary]: variant === "primary",
          // @ts-ignore
          [ButtonStyle.secondary]: variant === "secondary"
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
