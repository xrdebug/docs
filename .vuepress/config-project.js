module.exports = {
    title: 'xrDebug',
    description: 'Lightweight portable debug utility',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        pwa: false,
        repo: 'xrdebug/xrdebug',
        docsRepo: 'xrdebug/docs',
        docsBranch: 'main',
        smoothScroll: false,
        editLinks: true,
        lastUpdated: true,
        nav_after: [
            {
              text: 'Library',
              ariaLabel: 'Library Menu',
              items: [
                {
                    text: 'Laravel',
                    link: 'https://github.com/xrdebug/laravel'
                },
                {
                    text: 'PHP',
                    link: 'https://github.com/xrdebug/php'
                },
                {
                    text: 'WordPress',
                    link: 'https://github.com/xrdebug/wordpress'
                }
              ]
            }
          ]
    },
};
