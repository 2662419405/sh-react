import React, { Component } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
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
        <code>样式测试</code>
        <div>
          <h1>按钮组</h1>
          <Button
            size={ButtonSize.Large}
            btnType={ButtonType.Danger}
            onClick={this.getMockData}
          >
            获取数据
          </Button>
          <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>
            按钮
          </Button>
          <Button
            size={ButtonSize.Large}
            btnType={ButtonType.Link}
            href="http://www.baidu.com"
          >
            按钮
          </Button>
          <Menu mode="vertical">
            <SubMenu title="标题">
              {list.map((v: { address: string }, i) => {
                return <MenuItem key={i}>{v.address}</MenuItem>;
              })}
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}
