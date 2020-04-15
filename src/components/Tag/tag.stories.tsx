import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tag from "./Tag";

export const defaultTag = () => (
  <>
    <Tag>123</Tag>
    <Tag closable onClick={action("click")}>
      123
    </Tag>
  </>
);

export const colorTag = () => (
  <>
    <Tag color="#87d068" closable>
      123
    </Tag>
    <Tag color="#108ee9">123</Tag>
    <Tag color="#2db7f5">123</Tag>
    <Tag color="#f50">123</Tag>
  </>
);

storiesOf("Tag 标签", module)
  .add("默认的标签", defaultTag)
  .add("不同颜色的标签", colorTag);
