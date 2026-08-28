import { IconComponent } from "reicon-react";

type Variants = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variants;
  icon?: IconComponent;
  iconSize?: number;
};

const base =
  "flex font-display items-center justify-center gap-sm py-sm px-md rounded-md border border-accent-muted";

const variants: Record<Variants, string> = {
  primary: "bg-accent text-bg-primary",

  secondary:
    "bg-bg-secondary text-accent hover:bg-accent hover:text-bg-primary",
};

export default function Button({
  variant = "secondary",
  className,
  icon: Icon,
  iconSize = 18,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[base, variants[variant], className].join(" ")}
      {...props}
    >
      {Icon && <Icon size={iconSize} />}
      {children}
    </button>
  );
}
