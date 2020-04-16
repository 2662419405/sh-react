import React, { FC, useState, BaseHTMLAttributes } from "react";
import classNames from "classnames";
import Icon from "../Icon";

export interface TagProps {
  closable?: boolean;
  className?: string;
  color?: string;
  onClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  visible?: boolean;
}

type BaseProps = BaseHTMLAttributes<HTMLElement>;
export type TagsProps = TagProps & BaseProps;

const Tag: FC<TagsProps> = (props) => {
  const {
    className,
    onClose,
    visible,
    closable,
    children,
    color,
    ...restProps
  } = props;
  const [hide, setHide] = useState(false);
  const handleHideTags = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (onClose) {
      onClose(event);
    }
    setHide(true);
  };
  const classes = classNames(
    className,
    "sh-tag",
    {
      "sh-tag-has-color": color,
    },
    {
      "sh-tag-hide": visible || hide,
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
  visible: false,
};

export default Tag;
