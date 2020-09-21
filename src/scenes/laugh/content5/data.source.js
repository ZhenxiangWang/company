const getBlock = (data) => ({
  name: data.name,
  className: "block",
  md: 6,
  xs: 24,
  children: {
    wrapper: {
      className: "content5-block-content",
    },
    img: {
      children: data.img,
    },
    content: {
      children: data.content,
    },
    href: data.href,
  },
});

export default {
  wrapper: {
    className: "home-page-wrapper content5-wrapper",
  },
  page: {
    className: "home-page content5",
  },
  OverPack: {
    playScale: 0.3,
    className: "",
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: "搞笑视频",
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "在这里用一段话介绍服务的案例情况",
      },
    ],
  },
  block: {
    className: "content5-img-wrapper",
    gutter: 16,
    children: [
      getBlock({
        name: "block0",
        img:
          "http://i1.hdslb.com/bfs/archive/e5f74fa44612f5952139a729776b60641c07c898.jpg@380w_240h_100Q_1c.webp",
        content: "RM2019年度金手名场面，我曾经也相信科学！",
        href: "https://www.bilibili.com/video/BV1eJ411t7iT",
      }),
      getBlock({
        name: "block1",
        img:
          "http://i1.hdslb.com/bfs/archive/274e5435b7e99e47c0463318c5331901443dfc33.jpg@380w_240h_100Q_1c.webp",
        content: "【RM】我曾经相信科学，直到我遇到一个节目叫RM",
        href: "https://www.bilibili.com/video/BV1JJ41167B1",
      }),
      getBlock({
        name: "block2",
        img: "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
        content: "Ant Design",
      }),
      getBlock({
        name: "block3",
        img: "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
        content: "Ant Motion",
      }),
      getBlock({
        name: "block4",
        img: "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
        content: "Ant Design",
      }),
      getBlock({
        name: "block5",
        img: "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
        content: "Ant Motion",
      }),
      getBlock({
        name: "block6",
        img: "https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg",
        content: "Ant Design",
      }),
      getBlock({
        name: "block7",
        img: "https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg",
        content: "Ant Motion",
      }),
    ],
  },
};
