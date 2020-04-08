import React, { Component } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        123
        <code>测试</code>
        <h1>标题</h1>
        <Button
          size={ButtonSize.Large}
          onClick={() => {
            alert(1);
          }}
        >
          你好
        </Button>
      </div>
    );
  }
}
