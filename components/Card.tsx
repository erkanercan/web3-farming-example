import { FC } from "react";

const Card: FC<any> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default Card;
