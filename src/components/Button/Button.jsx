import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="btn__glow"></span>
      <span className="btn__text">{children}</span>
    </button>
  );
}

export default Button;
