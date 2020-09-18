/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Layout0 from "../../components/layout0";
import Banner4 from "../../components/banner4";
import Content0 from "../../components/content0";
import Content3 from "../../components/content3";
import Feature6 from "../../components/feature6";
import Feature8 from "../../components/feature8";
import Pricing2 from "../../components/pricing2";
import Content9 from "../../components/content9";
import Teams3 from "../../components/teams3";

import "../../static/index.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Novel extends React.Component {
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
      <Banner4.component
        id="Banner4_0"
        key="Banner4_0"
        dataSource={Banner4.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0.component
        id="Content0_0"
        key="Content0_0"
        dataSource={Content0.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3.component
        id="Content3_0"
        key="Content3_0"
        dataSource={Content3.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6.component
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature6.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8.component
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature8.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Pricing2.component
        id="Pricing2_0"
        key="Pricing2_0"
        dataSource={Pricing2.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content9.component
        id="Content9_0"
        key="Content9_0"
        dataSource={Content9.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Teams3.component
        id="Teams3_0"
        key="Teams3_0"
        dataSource={Teams3.dataSource}
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
