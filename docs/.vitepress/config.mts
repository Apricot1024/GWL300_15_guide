import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/GWL300_15_guide/',
  title: "GWL-300-15 HPGE使用指南",
  description: "中国原子能科学研究院12室核天体物理组GWL-300-15井型高纯锗探测器的简要使用说明",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact.md' }
    ],

    sidebar: [
      {
        text: 'GWL-300-15 HPGE',
        items: [
          { text: '汇总说明', link: '/guide/index.md' }
        ]
      },
      {
        text: '技术规格',
        items: [
          { text: '尺寸参数', link: '/guide/size.md' },
          { text: '分辨', link: '/guide/resolution.md'},
          { text: '冷却与高压', link: '/guide/bias1.md' }
        ]
      },
      {
        text: '使用注意',
        items: [
          { text: '液氮冷却', link: '/guide/n2liquid.md' },
          { text: '模块与连接', link: '/guide/nimmodule.md'},
          { text: '高压bias', link: '/guide/bias.md'},
          { text: '获取系统', link: '/guide/aquirement.md'}
        ]
      },
      {
        text: '现有结果',
        items: [
          { text: '本底谱', link: '/results/specbackground.md' },
          { text: '60Co谱', link: '/results/spec60Co.md' },
          { text: '133Ba-152Eu谱', link: '/results/spec133Ba152Eu.md' }
        ]
      },
      {
        text: '文档参考',
        items: [
          { text: '官方文档', link: '/manual/docs.md'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Apricot1024/GWL300_15_guide' }
    ]
  }
})
