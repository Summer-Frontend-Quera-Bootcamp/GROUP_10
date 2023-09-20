interface IAncherPrimary {
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  children: string;
}

export const AncherPrimary = ({
  href = "#",
  target = "_self",
  children,
}: IAncherPrimary) => {
  return (
    <a
      href={href}
      target={target}
      className=" cursor-pointer text-brand-primary font-extrabold active:text-gray-primary "
    >
      {children}
    </a>
  );
};
