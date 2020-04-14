import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./menu";
import MenuItem from "./menuItem";
import SubMenu from "./subMenu";

export const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

export const VertivalMenu = () => (
  <Menu mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

export const DropDownMenu = () => (
  <Menu>
    <MenuItem>active</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>xyz</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>drop1</MenuItem>
    </SubMenu>
    <SubMenu title="opened">
      <MenuItem>opened1</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf("Menu 菜单列表", module)
  .add("普通的菜单", defaultMenu)
  .add("不同方向的菜单", VertivalMenu)
  .add("下拉列表菜单", DropDownMenu);
