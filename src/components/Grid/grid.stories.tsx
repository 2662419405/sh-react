import React from "react";
import { storiesOf } from "@storybook/react";
import Col from "./Col";
import Row from "./Row";

export const defaultGrid = () => (
  <>
    <Row>
      <Col>123</Col>
      <Col>123</Col>
    </Row>
  </>
);

storiesOf("Grid 布局", module).add("默认栅格布局", defaultGrid);
