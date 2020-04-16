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
    <MenuItem key={1}>cool link</MenuItem>
    <MenuItem key={2} disabled>
      disabled
    </MenuItem>
    <MenuItem key={3}>cool link 2</MenuItem>
  </Menu>
);

export const VertivalMenu = () => (
  <Menu mode="vertical">
    <MenuItem key={1}>cool link</MenuItem>
    <MenuItem key={2}>cool link</MenuItem>
    <MenuItem key={3}>cool link 2</MenuItem>
  </Menu>
);

export const DropDownMenu = () => (
  <Menu>
    <MenuItem key={1}>active</MenuItem>
    <MenuItem key={2} disabled>
      disabled
    </MenuItem>
    <MenuItem key={3}>xyz</MenuItem>
    <SubMenu key={1} title="dropdown">
      <MenuItem>drop1</MenuItem>
    </SubMenu>
    <SubMenu key={2} title="opened">
      <MenuItem>opened1</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf("Menu 菜单列表", module)
  .add("普通的菜单", defaultMenu)
  .add("不同方向的菜单", VertivalMenu)
  .add("下拉列表菜单", DropDownMenu);
