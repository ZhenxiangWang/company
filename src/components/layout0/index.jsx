import React, { useState, useEffect } from "react";
import { enquireScreen } from "enquire-js";
import PropTypes from "prop-types";
import { Layout as AntLayout, BackTop } from "antd";
import Nav0 from "../nav0";
import Footer1 from "../footer1";
import "./index.less";

const { Content } = AntLayout;

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(b);
    });
  });

  return (
    <AntLayout className="layout">
      <Nav0.component
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav0.dataSource}
        isMobile={isMobile}
      />
      <Content>{children}</Content>
      <BackTop />
      <Footer1.component
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer1.dataSource}
        isMobile={isMobile}
      />
    </AntLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
