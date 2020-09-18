/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Layout0 from "../../components/layout0";
import Banner0 from "../../components/banner0";
import Content0 from "../../components/content0";
import Content5 from "../../components/content5";
import Content3 from "../../components/content3";

import "../../static/index.less";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Home extends React.Component {
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
      <Banner0.component
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner0.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0.component
        id="Content0_0"
        key="Content0_0"
        dataSource={Content0.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5.component
        id="Content5_0"
        key="Content5_0"
        dataSource={Content5.dataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3.component
        id="Content3_0"
        key="Content3_0"
        dataSource={Content3.dataSource}
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
