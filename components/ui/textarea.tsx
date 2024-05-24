import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full resize-none rounded-md border border-slate-200 bg-neutral-700 px-3 py-2 text-sm placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-none  dark:bg-neutral-800 dark:placeholder:text-white dark:focus-visible:ring-slate-300 lg:min-h-[140px] lg:text-base",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
