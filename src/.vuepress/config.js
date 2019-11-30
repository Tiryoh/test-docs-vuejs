module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Google', link: 'https://google.com/' },
      {
        text: 'SNS',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/' },
          { text: 'Instagram', link: 'https://www.instagram.com/' },
          { text: 'GitHub', link: 'https://github.com/' }
        ]
      }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/about/', 'About']
    ]
  }
}
