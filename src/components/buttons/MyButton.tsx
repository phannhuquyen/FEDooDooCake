import { Link } from "react-router-dom";

type Props = {
  children?: React.ReactNode;

  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;

  className?: string;

  to?: string;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;
};

const MyButton = ({
  children,
  onClick,
  className,
  to,
  type = "button",
  disabled = false,
}: Props) => {
  // link
  if (to) {
    return (
      <Link
        to={disabled ? "#" : to}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }

          onClick?.(e);
        }}
        className={`
          ${className}
          ${disabled ? "pointer-events-none opacity-50" : ""}
        `}
      >
        {children}
      </Link>
    );
  }

  // button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${className}
        cursor-pointer
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

export default MyButton;