module.exports = {
  title: 'xiao blog',
  tagline: 'The tagline of xiao blog',
  url: 'https://xiao-blog.now.sh',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xiaovlin', // Usually your GitHub org/user name.
  projectName: 'xiaoblog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'xiaolin',
      logo: {
        alt: 'xiao blog Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          label: 'GitHub',
          href: 'https://github.com/xiaovlin',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/xiaovlin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xiaolin, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: "./blog",
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
