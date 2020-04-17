import React from "react";
import { storiesOf } from "@storybook/react";
import Col from "./Col";
import Row from "./Row";

export const defaultGrid = () => (
  <>
    <Row>
      <Col span={12}>
        布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。
      </Col>
      <Col span={12}>我们的栅格化系统基于 Flex 布局</Col>
      <Col span={8}>col-8</Col>
      <Col span={16}>col-16</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

storiesOf("Grid 布局", module).add("默认栅格布局", defaultGrid);
