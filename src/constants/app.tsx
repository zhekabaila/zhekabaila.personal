interface MenusType {
  name: string
  link: string
}

export const menus: MenusType[] = [
  {
    name: 'About Me',
    link: '/about',
  },
  {
    name: 'Portofolio',
    link: '/portofolio',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

interface PortofolioType {
  title: string
  description: string
  img: string
  technology: string[]
  demo: string
  code?: string
}

export const portofolios: PortofolioType[] = [
  {
    title: 'Positivus',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/positivus.png',
    technology: ['next js', 'unocss'],
    demo: 'https://positivus-gamma.vercel.app/',
    code: 'https://github.com/zhekabaila/positivus-next',
  },
  {
    title: 'Blog',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/blog.png',
    technology: ['html', 'tailwind css', 'javascript', 'php', 'mysql'],
    demo: 'http://zheka.stemanika.com/',
    code: '',
  },
  {
    title: 'Ghia Farm',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/ghia-farm.png',
    technology: ['html', 'tailwind css', 'javascript', 'php'],
    demo: 'https://ghia-farm-sawala-tech.vercel.app/',
    code: '',
  },
  {
    title: 'Pionicon',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/pionicon.png',
    technology: ['html', 'tailwind css', 'javascript', 'php'],
    demo: 'https://pionicon.vercel.app/',
    code: '',
  },
]
