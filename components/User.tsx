import { ReactNode } from "react";

interface users {
  children: ReactNode;
}

const User = ({ children }: users) => {
  return <div>{children}</div>;
};

export default User;
