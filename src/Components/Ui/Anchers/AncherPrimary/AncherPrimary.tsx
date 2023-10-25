import { Link } from "react-router-dom";

interface IAncherPrimary {
  path: string;
  children: string | JSX.Element;
}

export const AncherPrimary = ({ children, path }: IAncherPrimary) => {
  return (
    <Link
      to={path}
      className=" cursor-pointer text-brand-primary font-extrabold active:text-gray-primary "
    >
      {children}
    </Link>
  );
};
