import clsx from "clsx";

function getClassName({ className }) {
  return clsx(
    "text-white text-lg font-semibold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    className
  );
}
const sizes = {
  small: "px-4 py-3",
  medium: "px-6 py-4",
  large: "w-full px-4 py-3",
};
const variants = {
  primary: "bg-marigold focus:ring-marigold",
  secondary: "bg-gray-800 focus:ring-gray-800",
  dark: "bg-gray-900 focus:ring-gray-900",
};

const Button = ({
  children,
  className,
  size = "small",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        sizes[size],
        variants[variant],
        getClassName({ className })
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
