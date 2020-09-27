const getBlock = (data) => ({
  name: data.name,
  className: "block",
  lg: 6,
  md: 8,
  sm: 12,
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
          "/images/laugh/e5f74fa44612f5952139a729776b60641c07c898.jpg@380w_240h_100Q_1c.webp",
        content: "RM2019年度金手名场面，我曾经也相信科学！",
        href: "https://www.bilibili.com/video/BV1eJ411t7iT",
      }),
      getBlock({
        name: "block1",
        img:
          "/images/laugh/274e5435b7e99e47c0463318c5331901443dfc33.jpg@380w_240h_100Q_1c.webp",
        content: "【RM】我曾经相信科学，直到我遇到一个节目叫RM",
        href: "https://www.bilibili.com/video/BV1JJ41167B1",
      }),
      getBlock({
        name: "block2",
        img:
          "/images/laugh/c47b435212a2277187a931e865a6c090b606aeb7.jpg@380w_240h_100Q_1c.webp",
        content: "尬剧挑战：0成本翻拍偶像剧《一起来看流星雨》",
        href: "https://www.bilibili.com/video/BV1mp4y1e7ii",
      }),
      getBlock({
        name: "block3",
        img:
          "/images/laugh/b8a4d8d14ef44f2b937fc952a1768de7c71f1899.jpg@380w_240h_100Q_1c.webp",
        content: "吐槽大会精彩片段【合集】",
        href: "https://www.bilibili.com/video/BV1dE411J7np",
      }),
      getBlock({
        name: "block4",
        img:
          "/images/laugh/cab8852a112f1fc1ad8b3f3fe537b2b355eeb483.jpg@380w_240h_100Q_1c.webp",
        content: "施法打断？？？",
        href: "https://www.bilibili.com/video/BV1BT4y137vz",
      }),
      getBlock({
        name: "block5",
        img:
          "/images/laugh/428e35947948647a9ad9cdfbacadf15e0500ffbf.jpg@380w_240h_100Q_1c.webp",
        content: "生而为猴，我很抱歉 e m o",
        href: "https://www.bilibili.com/video/BV1WV411U7W8",
      }),
      getBlock({
        name: "block6",
        img:
          "/images/laugh/89cd368ed4b3908780383ca60dfc07a8b7c69406.jpg@380w_240h_100Q_1c.webp",
        content: "隔几天来看一次，这视频我可以笑一年",
        href: "https://www.bilibili.com/video/BV1xJ411r7Yo",
      }),
      getBlock({
        name: "block7",
        img:
          "https://i.ytimg.com/vi/PcT8GwYX9OA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsEVblgV55J9SIEz3XpX51nyPLUw",
        content: "宇宙网红特朗普2018搞笑时刻大合集！",
        href: "https://www.youtube.com/watch?v=PcT8GwYX9OA",
      }),
    ],
  },
};
