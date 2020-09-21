/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Layout0 from "../../components/layout0";
import Banner5 from "../../components/banner5";
import Content0 from "../../components/content0";
import Feature6 from "../../components/feature6";
import Feature7 from "../../components/feature7";
import Feature8 from "../../components/feature8";

import "../../static/index.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Game extends React.Component {
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
      <Banner5.component
        id="Banner5_0"
        key="Banner5_0"
        dataSource={Banner5.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature6.component
        id="Feature6_0"
        key="Feature6_0"
        dataSource={Feature6.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature7.component
        id="Feature7_0"
        key="Feature7_0"
        dataSource={Feature7.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0.component
        id="Content0_0"
        key="Content0_0"
        dataSource={Content0.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature8.component
        id="Feature8_0"
        key="Feature8_0"
        dataSource={Feature8.dataSource}
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
