import React from "react";
import { Row, Col } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { getChildrenToRender } from "../../../utils";
import "./index.less";
import dataSource from "./data.source";

class Content5 extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item) => {
      return (
        <Col key={item.name} {...item} data-edit="Col">
          <a
            href={item.children.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div {...item.children.wrapper}>
              <span {...item.children.img}>
                <img
                  src={item.children.img.children}
                  width="100%"
                  height="100%"
                  object-fix="cover"
                  alt="img"
                />
              </span>

              <p {...item.children.content}>
                {React.createElement("span", {
                  dangerouslySetInnerHTML: {
                    __html: item.children.content.children,
                  },
                })}
              </p>
            </div>
          </a>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div
            key="title"
            {...dataSource.titleWrapper}
            data-edit="titleWrapper"
          >
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: "+=30",
                opacity: 0,
                type: "from",
                ease: "easeInOutQuad",
              }}
              leave={{ y: "+=30", opacity: 0, ease: "easeInOutQuad" }}
              {...dataSource.block}
              data-edit="Row"
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default { component: Content5, dataSource };
