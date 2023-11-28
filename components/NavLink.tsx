import Link from "next/link";

interface Props {
  href: string;
  label: string;
  icon: React.JSX.Element;
}

const NavLink = ({ href, icon, label }: Props) => {
  return (
    <Link
      key={href}
      href={href}
      className="flex items-center gap-4 bg-white mb-1 h-14"
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
};

export default NavLink;
