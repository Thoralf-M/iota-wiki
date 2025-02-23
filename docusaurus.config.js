/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'IOTA Wiki',
  tagline: 'The complete reference for IOTA',
  url: 'https://wiki.iota.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'iota-wiki', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    image: 'img/iota-wiki.png',
    algolia: {
      apiKey: '829457a9c9dd5a8ddd31d08c86e154c2',
      indexName: 'iota',
      contextualSearch: true,
    },
    matomo: {
      matomoUrl: 'https://matomo.antonionardella.it/',
      siteId: '6',
    },
    cards: [
      {
        title: 'Learn',
        image: 'img/learn.svg',
        link: 'learn/about-iota/an-introduction-to-iota',
        description:
          'Learn about IOTA, the Tangle, its features, industry applications, network and more.',
      },
      {
        title: 'Participate',
        image: 'img/participate.svg',
        link: 'participate/support-the-network/about-nodes',
        description:
          'Join the network and start using solutions built on top of the Tangle.',
      },
      {
        title: 'Build',
        image: 'img/build.svg',
        link: 'build/welcome',
        description:
          'Access documentation and guides to build with IOTA in Rust and other languages.',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'IOTA Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          label: 'Learn',
          to: 'learn/about-iota/an-introduction-to-iota',
          activeBaseRegex: 'learn/.*',
        },
        {
          label: 'Participate',
          to: 'participate/support-the-network/about-nodes',
          activeBaseRegex: 'participate/.*',
        },
        {
          label: 'Build',
          to: '#',
          layout: [
            '0 1 3 4',
            '0 1 3 4',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
            '. 1 3 2',
          ],
          items_: [
            {
              label: 'Getting Started',
              items: [
                {
                  label: 'Getting Started',
                  sublabel: 'IOTA development basics',
                  to: 'build/welcome',
                  icon: '\ue902',
                  activeBaseRegex: '/build/.*',
                },
              ],
            },
            {
              label: 'Chrysalis (IOTA 1.5)',
              items: [
                {
                  label: 'Chrysalis Docs',
                  sublabel: 'Mainnet documentation',
                  to: 'chrysalis-docs/welcome',
                  icon: '\ue901',
                  activeBaseRegex: 'chrysalis-docs.*',
                },
                {
                  label: 'Bee Node',
                  sublabel: 'IOTA node written in Rust',
                  to: 'bee/getting_started/getting_started',
                  icon: '\ue900',
                  activeBaseRegex: 'bee/.*',
                },
                {
                  label: 'Hornet Node',
                  sublabel: 'IOTA node written in Go',
                  to: 'hornet/welcome',
                  icon: '\ue904',
                  activeBaseRegex: 'hornet/.*',
                },
                {
                  label: 'Chronicle Permanode',
                  sublabel: 'IOTA permanode in Rust',
                  to: 'chronicle.rs/welcome',
                  icon: '\ue90c',
                  activeBaseRegex: 'chronicle.rs/.*',
                },
              ],
            },
            {
              label: 'Coordicide (IOTA 2.0)',
              items: [
                {
                  label: 'Coordicide Specs',
                  sublabel: 'Decentralizing IOTA',
                  to: 'IOTA-2.0-Research-Specifications/Preface',
                  icon: '\ue906',
                  activeBaseRegex: 'IOTA-2.0-Research-Specifications/.*',
                },
                {
                  label: 'GoShimmer Node',
                  sublabel: 'IOTA 2.0 node',
                  to: 'goshimmer/welcome',
                  icon: '\ue903',
                  activeBaseRegex: 'goshimmer/.*',
                },
              ],
            },
            {
              label: 'Libraries',
              items: [
                {
                  label: 'Core',
                  sublabel: 'IOTA core functionality',
                  to: 'iota.rs/welcome',
                  icon: '\ue907',
                  activeBaseRegex: 'iota.rs/.*',
                },
                {
                  label: 'Wallet',
                  sublabel: 'Build IOTA wallets',
                  to: 'wallet.rs/welcome',
                  icon: '\ue90a',
                  activeBaseRegex: 'wallet.rs/.*',
                },
                {
                  label: 'Stronghold',
                  sublabel: 'Handle secrets securely',
                  to: 'stronghold.rs/welcome',
                  icon: '\ue909',
                  activeBaseRegex: 'stronghold.rs/.*',
                },
                {
                  label: 'Identity',
                  sublabel: 'Identity framework',
                  to: 'identity.rs/introduction',
                  icon: '\ue905',
                  activeBaseRegex: 'identity.rs/.*',
                },
                {
                  label: 'Streams',
                  sublabel: 'Share data securely',
                  to: 'streams/welcome',
                  icon: '\ue908',
                  activeBaseRegex: 'streams/.*',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              items: [
                {
                  label: 'Wasp Node',
                  sublabel: 'Smart contract node',
                  to: 'wasp/overview',
                  icon: '\ue90b',
                  activeBaseRegex: 'wasp/.*',
                },
              ],
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        { to: '/team', label: 'Team', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'LEARN',
          items: [
            {
              label: 'About IOTA',
              to: 'learn/about-iota/an-introduction-to-iota',
            },
            {
              label: 'IOTA Token',
              to: 'learn/iota-token/buying-iota',
            },
            {
              label: 'Wallets',
              to: 'learn/wallets/what-is-a-wallet',
            },
            {
              label: 'Networks',
              to: 'learn/networks/iota-1.5-chrysalis',
            },
            {
              label: 'Resource Materials',
              to: 'learn/resource-materials/glossary',
            },
            {
              label: 'Research',
              to: 'learn/research/research-outline',
            },
            {
              label: 'Future of IOTA',
              to: 'learn/future/future-of-iota',
            },
          ],
        },
        {
          title: 'PARTICIPATE',
          items: [
            {
              label: 'Support the network',
              to: 'participate/support-the-network/about-nodes',
            },
            {
              label: 'The Community',
              to: 'participate/the-community/discord',
            },
            {
              label: 'Partnerships',
              href: 'https://www.iota.org/solutions/partnerships',
            },
            {
              label: 'Funding',
              to: 'participate/funding/edf-funding',
            },
            {
              label: 'Use Cases',
              to: 'participate/use-cases/industry-applications',
            },
            {
              label: 'Frameworks',
              to: 'participate/frameworks/introduction',
            },
          ],
        },
        {
          title: 'BUILD',
          items: [
            {
              label: 'Getting Started',
              to: 'build/welcome',
            },
            {
              label: 'Fundamentals',
              to: 'build/fundamentals/cryptography',
            },
            {
              label: 'Exchange Integration',
              to: 'build/exchange-integration/exchange-integration-guide',
            },
            {
              label: 'Tutorials',
              to: 'build/tutorials/twitch',
            },
          ],
        },
        {
          title: 'WIKI',
          items: [
            {
              label: 'Team',
              to: 'team',
            },
            {
              label: 'Github',
              href: 'https://github.com/iota-community/iota-wiki',
            },
            {
              label: 'Editor Github',
              href: 'https://github.com/jlvandenhout/docusaurus-plugin-docs-editor',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Contribute',
              to: 'participate/contribute-to-wiki/welcome',
            },
          ],
        },
      ],
      logo: {
        alt: 'IOTA Logo',
        src: 'img/iota_logo.svg',
        href: 'https://www.iota.org',
      },
      copyright: `© ${new Date().getFullYear()} IOTA Wiki. Built with Docusaurus.`,
    },
    socials: [
      {
        title: 'Youtube',
        icon: '\ue907',
        url: 'https://www.youtube.com/c/iotafoundation',
        backgroundColor: 'var(--ifm-color-gray-900)',
      },
      {
        title: 'GitHub',
        icon: '\ue902',
        url: 'https://www.github.com/iotaledger/',
        backgroundColor: '#2C3850',
      },
      {
        title: 'Discord',
        icon: '\ue900',
        url: 'https://discord.iota.org/',
        backgroundColor: '#4B576F',
      },
      {
        title: 'Twitter',
        icon: '\ue906',
        url: 'https://www.twitter.com/iota/',
        backgroundColor: '#6A768E',
      },
      {
        title: 'Reddit',
        icon: '\ue905',
        url: 'https://www.reddit.com/r/iota/',
        backgroundColor: '#7D89A1',
      },
      {
        title: 'Linkedin',
        icon: '\ue904',
        url: 'https://www.linkedin.com/company/iotafoundation/',
        backgroundColor: '#8995AD',
      },
      {
        title: 'Instagram',
        icon: '\ue903',
        url: 'https://www.instagram.com/iotafoundation/',
        backgroundColor: '#99A5BD',
      },
      {
        title: 'Facebook',
        icon: '\ue901',
        url: 'https://www.facebook.com/TheIOTAFoundation/',
        backgroundColor: '#BAC6DE',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: 'light_mode',

        // CSS to apply to dark icon
        darkIconStyle: {
          fontFamily: 'Material Icons',
        },

        lightIcon: 'dark_mode',

        lightIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
    searchMode: {
      switchConfig: {
        closeIcon: 'close',

        closeIconStyle: {
          fontFamily: 'Material Icons',
        },

        searchIcon: 'search',

        searchIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    // [
    //   '@jlvandenhout/docusaurus-plugin-docs-editor',
    //   {
    //     // GitHub OAuth Application settings
    //     github: {
    //       docs: {
    //         // The path to the docs section in your repository
    //         path: 'internal/',
    //       },
    //       // REQUIRED - The Client ID you got from the GitHub OAuth App setup
    //       clientId: '30a8f5a21215004e81ca',
    //       // REQUIRED - The plugin will append the authorization code to this URL
    //       tokenUrl:
    //         'https://iota-wiki-github-oauth-login.iotaledger.workers.dev',
    //       // The request method to use (GET or POST), defaults to GET
    //       method: 'POST',
    //     },
    //   },
    // ],
    'docusaurus-plugin-matomo',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'internal/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./internal/learn/sidebars.js'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'participate',
        path: 'internal/participate',
        routeBasePath: 'participate',
        sidebarPath: require.resolve('./internal/participate/sidebars.js'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'internal/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./internal/build/sidebars.js'),

        // General config
        editUrl: 'https://github.com/iota-community/iota-wiki/edit/main/',
        remarkPlugins: [
          require('remark-code-import'),
          require('remark-import-partial'),
        ],
        showLastUpdateTime: true,
      },
    ],
    /* AUTO GENERATED EXTERNAL DOCS CONFIG */
  ],
};
