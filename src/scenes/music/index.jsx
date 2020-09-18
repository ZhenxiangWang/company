/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Layout0 from "../../components/layout0";
import Banner3 from "../../components/banner3";
import Content8 from "../../components/content8";
import Content9 from "../../components/content9";
import Content10 from "../../components/content10";
import Content11 from "../../components/content11";
import Content12 from "../../components/content12";

import "../../static/index.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    const children = [
      <Banner3.component
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner3.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content8.component
        id="Content8_0"
        key="Content8_0"
        dataSource={Content8.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9.component
        id="Content9_0"
        key="Content9_0"
        dataSource={Content9.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content10.component
        id="Content10_0"
        key="Content10_0"
        dataSource={Content10.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content11.component
        id="Content11_0"
        key="Content11_0"
        dataSource={Content11.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content12.component
        id="Content12_0"
        key="Content12_0"
        dataSource={Content12.dataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <Layout0>{children}</Layout0>
      </div>
    );
  }
}
