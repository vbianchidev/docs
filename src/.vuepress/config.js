const { description } = require('../../package')

module.exports = {
  title: 'Integrativa Docs',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#0090DF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '/docs/',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Início',
        link: '/docs/guia/',
      },
      {
        text: 'Interlitis',
        link: '/docs/interlitis/',
      },
      {
        text: 'Mineração',
        link: '/docs/mineracao/'
      },{
        text: 'Regras de Negócio',
        link: '/docs/regras-negocio/'
      }
    ],
    sidebar: {
      '/docs/guia/': [
        {
          title: 'Introdução',
          collapsable: true,
          children: []
        }
      ],
      '/docs/interlitis/': [
        {
          title: 'Interlitis',
          collapsable: true,
          children: [
            '',
            'backend',
            'frontend',
          ]
        }
      ],
      '/docs/regras-negocio/': [
        {
          title: 'Regras de Negócio',
          collapsable: true,
          children: []
        }
      ],
      '/docs/mineracao/': [
        {
          title: 'Mineração',
          collapsable: true,
          children: []
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/src/.vuepress/public/images/'
      }
    }
  }
}
