import Link from "next/link";
function Button({ design, children, onClick, to, type, disabled }) {
  const base =
    "mt-2  w-48 sm:w-64 rounded-full  bg-[#04749B] focus:outline-none  focus:ring  focus:ring-offset-1 focus:ring-[#04749B]  p-2 text-center   text-white ";
  const styled = {
    primary: base,
    active:
      "rounded-lg bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white",
    addItem:
      "rounded-lg w-full bg-[#04749c] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white",
    visit:
      "rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-[#04749c] visited:text-white hover:bg-[#04749c] hover:text-white focus:bg-[#04749c]  focus:text-white",
  };

  if (to)
    return (
      <Link
        to={to}
        type="submit"
        className={styled[design]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        type={type}
        onClick={onClick}
        className={styled[design]}>
        {children}
      </button>
    );
  if (type)
    return (
      <button
        type={type}
        disabled={disabled}
        className={styled[design]}>
        {children}
      </button>
    );

  return <button className={styled[design]}>{children}</button>;
}

export default Button;
