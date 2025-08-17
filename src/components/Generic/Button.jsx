const Button = ({
  type = "secondary",
  size = "base",
  label,
  Icon,
  iconClass,
  buttonClassName = "",
}) => {
  let buttonClass =
    type === "primary"
      ? "from-red-700 to-red-500 hover:from-red-500 hover:to-red-700 text-white"
      : type === "secondary"
      ? "border border-gray-300 from-gray-100 to-gray-50 hover:from-gray-50 hover:to-gray-100"
      : type === "outline"
      ? ""
      : "";

  let buttonSize =
    size === "lg"
      ? "text-xs lg:text-sm font-medium px-3 lg:px-5 py-2 lg:py-3"
      : "text-[10px] xl:text-xs font-semibold px-2 lg:px-3 py-1.5 lg:py-2";

  return (
    <div
      className={`bg-gradient-to-tr rounded-sm shadow-md transition duration-500 cursor-pointer ${buttonClass} ${buttonSize} ${buttonClassName}`}
    >
      {label || (Icon && <Icon className={iconClass} />)}
    </div>
  );
};

export default Button;
