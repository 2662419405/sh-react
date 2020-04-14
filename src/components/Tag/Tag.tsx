import React, { FC, useState, BaseHTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../Icon";

export interface TagProps {
  closable?: boolean;
  className?: string;
  color?: string;
}

type BaseProps = BaseHTMLAttributes<HTMLElement>
export type TagsProps = TagProps & BaseProps

const Tag: FC<TagsProps> = (props) => {
  const { className, closable, children, color, ...restProps } = props;
  const [hide, setHide] = useState(false);
  const handleHideTags = () => {
    setHide(true);
  };
  const classes = classNames(
    className,
    "sh-tag",
    {
      "sh-tag-has-color": color,
    },
    {
      "sh-tag-hide": hide,
    }
  );
  return (
    <span {...restProps} style={{ backgroundColor: color }} className={classes}>
      {children}
      {closable && (
        <span className="antion-close">
          <Icon onClick={handleHideTags} icon="times" title={`title-close`} />
        </span>
      )}
    </span>
  );
};

Tag.defaultProps = {
  closable: false,
};

export default Tag;
