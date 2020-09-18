export default {
  wrapper: {
    className: "header0 home-page-wrapper",
  },
  page: {
    className: "home-page",
  },
  logo: {
    className: "header0-logo",
    href: "/",
    children: "https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "/image",
          children: [
            {
              children: "图片",
              name: "text",
            },
          ],
        },
        // subItem: [
        //   {
        //     name: "sub0",
        //     className: "item-sub",
        //     children: {
        //       href: "/image",
        //       className: "item-sub-item",
        //       children: [
        //         {
        //           name: "image0",
        //           className: "item-image",
        //           children:
        //             "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
        //         },
        //         {
        //           name: "title",
        //           className: "item-title",
        //           children: "Ant Design",
        //         },
        //         {
        //           name: "content",
        //           className: "item-content",
        //           children: "企业级 UI 设计体系",
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     name: "sub1",
        //     className: "item-sub",
        //     children: {
        //       href: "/image",
        //       className: "item-sub-item",
        //       children: [
        //         {
        //           name: "image0",
        //           className: "item-image",
        //           children:
        //             "https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg",
        //         },
        //         {
        //           name: "title",
        //           className: "item-title",
        //           children: "Ant Design",
        //         },
        //         {
        //           name: "content",
        //           className: "item-content",
        //           children: "企业级 UI 设计体系",
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "/movie",
          children: [
            {
              children: "电影",
              name: "text",
            },
          ],
        },
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "/music",
          children: [
            {
              children: "音乐",
              name: "text",
            },
          ],
        },
      },
      {
        name: "item3",
        className: "header0-item",
        children: {
          href: "/novel",
          children: [
            {
              children: "小说",
              name: "text",
            },
          ],
        },
      },
      {
        name: "item4",
        className: "header0-item",
        children: {
          href: "/game",
          children: [
            {
              children: "游戏",
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: {
    className: "header0-mobile-menu",
  },
};
