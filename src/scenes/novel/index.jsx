/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import { enquireScreen } from "enquire-js";

import Layout0 from "../../components/layout0";
import Banner6 from "../../components/banner6";
import Content14 from "../../components/content14";
import Content15 from "../../components/content15";
import Content16 from "../../components/content16";

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
      <Banner6 isMobile={this.state.isMobile} />,
      <Content14 isMobile={this.state.isMobile} />,
      <Content15 isMobile={this.state.isMobile} />,
      <Content16 />,
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
