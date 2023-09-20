type ILayout = {
  children: React.ReactNode;
};
const Layout = ({ children }: ILayout): JSX.Element => {
  return <div>{children}</div>;
};

export default Layout;
