/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tag from "./Tag";
import Input from "../Input";
import Icon from "../Icon";

export const defaultTag = () => (
  <>
    <Tag onClick={action("click")}>123</Tag>
    <Tag onClose={action("close")} closable>
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

export const toggleTag = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisable] = useState(false);
  return (
    <>
      <Tag visible={visible}>toggle</Tag>
      <button onClick={() => setVisable(!visible)}>切换状态</button>
    </>
  );
};

export const addTag = () => {
  const [list, setList] = useState(["Unremovable", "Tag 2", "Tag 3"]);
  const [visibleInput, setVisibleInput] = useState(false);
  const [value, setValue] = useState("");
  const clearHandlerChange = () => {
    setList([...list, value]);
    setVisibleInput(false);
    setValue("");
  };
  return (
    <>
      {list.map((v, i) => {
        return <Tag key={i}>{v}</Tag>;
      })}
      {visibleInput ? (
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={clearHandlerChange}
        ></Input>
      ) : (
        <Tag className="site-tag-plus" onClick={() => setVisibleInput(true)}>
          <Icon icon="plus-square"></Icon> New Tag
        </Tag>
      )}
    </>
  );
};

storiesOf("Tag 标签", module)
  .add("默认的标签", defaultTag)
  .add("不同颜色的标签", colorTag)
  .add("控制开关状态", toggleTag)
  .add("动态添加标签", addTag);
