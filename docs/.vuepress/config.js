const global = require("./env");
module.exports = {
  title: global.APP_TITLE,
  description: "黑恶势力纠缠骚扰事件",
  base: global.APP_BASE,
  head: [
    ["link", { rel: "icon", href: "" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "通用的编写文档的模版",
      },
    ],
  ],
  themeConfig: {
    repo: global.APP_REPO,
    repoLabel: global.APP_REPOLABEL,
    docsRepo: global.APP_DOCSREPO,
    docsDir: global.APP_DOCSDIR,
    // docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: "可以帮助我们改善这页面！",
    ignoreDeadLinks: true,
    sitemap: {
      hostname: global.APP_HOSTNAME,
      lastmodDateOnly: true,
    },
    // displayAllHeaders: true,
    sidebar: [
      {
        title: "纠缠、骚扰事件",
        collapsable: true,
        children: [
          ["纠缠骚扰事件/type1", "类型1"],
        ],
      },
      {
        title: "均禾派出所",
        collapsable: true,
        children: [
          ["2025/202505151.md", "第一次报案"],
          ["2025/20250604.md", "拿不给立案告知书"],
          ["2025/20250615.md", "在12389进行反馈"],
          ["2025/20250625.md", "第一次上访"],
          ["2025/20250627.md", "第二次上访"],
          ["2025/包庇.md", "恶势力保护伞"]
        ],
      },
      {
        title: "鹤洞派出所",
        collapsable: true,
        children: [
          ["2026/0318.md", "第二次报案"],
          ["2026/0805.md", "向12377反馈"],
        ],
      },
      {
        title: "行政起诉事件",
        collapsable: true,
        children: [
          ["2026/0318.md", "发起起诉"],
        ],
      },
      {
        title: "相关法律",
        collapsable: true,
        children: [
          ["相关法律/信访条.md", "《信访工作条例》"],
          ["相关法律/行政诉讼法", "《行政诉讼法》"],
          ["相关法律/行政诉讼法司法解释", "《行政诉讼法》司法解释"],
        ],
      }
    ],
  },
  纠缠骚扰事件: {
    lineNumbers: true,
  },
};
