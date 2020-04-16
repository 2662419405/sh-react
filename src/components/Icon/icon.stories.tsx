import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./icon";

export const defaultIcon = () => (
  <>
    <Icon icon="plus-square" />
    <Icon icon="adjust" />
    <Icon icon="ad" />
    <Icon icon="adn" />
    <Icon icon="search" />
    <br />
    详细icon图标属性可以查看
    <a href="https://fontawesome.com/icons">fontawesome官网</a>
  </>
);

storiesOf("Icon 图标", module).add("默认图标", defaultIcon);
