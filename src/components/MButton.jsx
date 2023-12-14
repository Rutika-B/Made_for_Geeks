export default function MButton({
  children,
  textClr = "text-White",
  bgColor = "bg-blue-600",
  margin = "mt-8",
  type = "button",
  classname = "",
  onClick = () => {},
  disabled = false,
  ...props
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`btn ${classname} ${margin}`}
      >
        {children}
      </button>
    </>
  );
}
