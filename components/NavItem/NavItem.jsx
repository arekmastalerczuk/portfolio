import Link from "next/link";

const NavItem = ({ path, children, ...props }) => {
  return (
    <Link
      href={path}
      className={`btn btn-ghost text-primary-text text-lg ${props.className}`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
