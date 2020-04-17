import React from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
}

export const Row: React.FC<IProps> = (props) => {
  const { className, children } = props;
  const classes = classNames("sh-row", className);
  return <div className={classes}>{children}</div>;
};

export default Row;