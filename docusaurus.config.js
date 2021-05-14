/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'UberHaus Docs',
  tagline: 'Your #1 Guide to UberHaus DAO',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'raid-guild', // Usually your GitHub org/user name.
  projectName: 'UberHaus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UberHaus DAO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/UberHaus/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/welcome',
              position: 'left',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/UberHaus/docs',
              position: 'left'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/7K4HenWeJa',
              position: 'right'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nowdaoit',
              position: 'right'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RaidGuild, DAO`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/UberHaus/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};