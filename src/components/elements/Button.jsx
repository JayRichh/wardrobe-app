import clsx from "clsx";

function getClassName({ className }) {
  return clsx(
    "text-black text-lg font-semibold rounded-3xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    className
  );
}
const sizes = {
  small: "px-5 py-2",
  medium: "px-5 py-2",
  large: "w-full px-5 py-2",
};
const variants = {
  primary: "bg-creamPrimary focus:ring-greenPrimary",
  secondary: "bg-greenLight focus:ring-gray-800",
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
