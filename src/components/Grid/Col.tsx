import React from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
  span?: number;
}

const Col: React.FC<IProps> = (props) => {
  const { className, span } = props;
  const classes = classNames("sh-col", className, {
    [`sh-col-${span}`]: span,
  });
  return <div className={classes}></div>;
};

export default Col;
