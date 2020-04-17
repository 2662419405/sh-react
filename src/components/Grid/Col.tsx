import React from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  span?: number;
}

export const Col: React.FC<IProps> = (props) => {
  const { className, span, children } = props;
  const classes = classNames("sh-col", className, {
    [`sh-col-${span}`]: span,
  });
  return <div className={classes}>{children}</div>;
};

export default Col;
