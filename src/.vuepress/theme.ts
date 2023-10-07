import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://puersip.github.io",

  author: {
    name: "Mr.Puersip",
    url: "https://github.com/Puersip",
  },

  iconAssets: "fontawesome-with-brands",

  // logo: "/logo.svg",

  repo: "https://github.com/Puersip",

  docsDir: "src",

  favicon: "/favicon.svg",

  // navbar
  navbar,

  // sidebar
  sidebar,

  // footer: "默认页脚",

  displayFooter: true,

  blog: {
    name: "Mr.Puersip",
    avatar: "/avatar.jpg",
    roundAvatar: true,
    description: "一条咸鱼",
    intro: "/intro/",
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      container: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
      
    },
  },
});
