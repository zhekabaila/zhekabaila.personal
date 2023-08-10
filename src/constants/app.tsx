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
  link: string
}

export const portofolios: PortofolioType[] = [
  {
    title: 'Positivus',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/positivus.png',
    link: 'https://positivus-gamma.vercel.app/',
  },
  {
    title: 'Blog',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/static/images/blog.png',
    link: 'http://zheka.stemanika.com/',
  },
]
