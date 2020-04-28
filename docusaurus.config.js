const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: 'xiao',
  tagline: 'The tagline of xiao blog',
  url: 'https://xiaovlin.now.sh',
  baseUrl: '/',
  favicon: 'img/mikucode.ico',
  organizationName: 'xiaovlin', // Usually your GitHub org/user name.
  projectName: 'xiaovlin.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'xiao',
      logo: {
        alt: 'mikucode Logo',
        src: 'img/mikucode.svg',
      },
      links: [
        {to: '/', label: 'Blog', position: 'right'},
        {
          label: 'GitHub',
          href: 'https://github.com/xiaovlin',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} xiaolin, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: "./blog",
          routeBasePath: "/",
          postsPerPage: 5,
          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
