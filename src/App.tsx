import React, { Component } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Axios from "./utils/sh-axios";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  getMockData = async () => {
    const data = await Axios.getAxios({
      isShow: true,
      url:
        "http://mock.shtodream.cn/mock/5e8eb74cb9b0d45a938f5d67/example/mock",
      method: "get",
      params: {
        id: 2,
        name: "sh",
      },
    });
    this.setState({
      list: data as [object],
    });
  };

  readonly state = {
    list: [],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        123
        <code>测试</code>
        <h1>标题</h1>
        <Button
          size={ButtonSize.Large}
          btnType={ButtonType.Danger}
          onClick={this.getMockData}
        >
          获取数据
        </Button>
        {list.map((v: { address: string }, i) => {
          return <div key={i}>{v.address}</div>;
        })}
      </div>
    );
  }
}
