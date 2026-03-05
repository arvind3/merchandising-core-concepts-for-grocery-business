import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Merchandising Core Concepts for Grocery Business',
  tagline: 'Professional reference for grocery merchandising strategy and execution',
  favicon: 'img/logo.svg',

  url: 'https://arvind3.github.io',
  baseUrl: '/merchandising-core-concepts-for-grocery-business/',
  organizationName: 'arvind3',
  projectName: 'merchandising-core-concepts-for-grocery-business',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/arvind3/merchandising-core-concepts-for-grocery-business/tree/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Merchandising Core Concepts',
      logo: {
        alt: 'Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/arvind3/merchandising-core-concepts-for-grocery-business',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Book',
          items: [
            { label: 'Chapter 1', to: '/chapters/chapter-01-introduction-to-grocery-merchandising' },
            { label: 'References', to: '/resources/references' },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/arvind3/merchandising-core-concepts-for-grocery-business',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Arvind Bhardwaj. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
