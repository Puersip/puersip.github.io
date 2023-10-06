import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Hello Blog",
  description: "一个集会所",

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => {
            const category = page.frontmatter.category;
            if (!category) return null;  // 如果 tag 不存在返回 null
            if (Array.isArray(category)) return category;  // 如果 tag 是数组直接返回
            return [category];  // 否则将其转化为一个数组并返回
          },
          formatter: "分类：$content",
        },
        {
          getter: (page) => {
            const tag = page.frontmatter.tag;
            if (!tag) return null;  // 如果 tag 不存在返回 null
            if (Array.isArray(tag)) return tag;  // 如果 tag 是数组直接返回
            return [tag];  // 否则将其转化为一个数组并返回
          },
          formatter: "标签：$content",
        },
      ],
    }),
  ],

});
