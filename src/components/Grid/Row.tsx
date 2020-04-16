import React from "react";
import classNames from "classnames";

interface IProps {
  className?: string;
}

const Row: React.FC<IProps> = (props) => {
  const { className } = props;
  const classes = classNames("sh-row", className);
  return <div className={classes}></div>;
};

export default Row;
