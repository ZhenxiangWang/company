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
        <Col
          key={item.name}
          {...item}
          /* replace-start */
          data-edit="Col"
          /* replace-end */
        >
          <a
            href={item.children.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div {...item.children.wrapper}>
              <span {...item.children.img}>
                <img src={item.children.img.children} height="100%" alt="img" />
              </span>

              <p {...item.children.content}>
                {
                  /* replace-start-value = item.children.content.children */
                  React.createElement("span", {
                    dangerouslySetInnerHTML: {
                      __html: item.children.content.children,
                    },
                  })
                  /* replace-end-value */
                }
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
            /* replace-start */
            data-edit="titleWrapper"
            /* replace-end */
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
              /* replace-start */
              data-edit="Row"
              /* replace-end */
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
