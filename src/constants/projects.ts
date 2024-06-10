export type ProjectType = {
  title: string
  description: string
  img: string
  technology: string[]
  demo: string
  code?: string
}

export const projects: ProjectType[] = [
  {
    title: 'Positivus',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/images/projects/positivus.png',
    technology: ['next js', 'unocss'],
    demo: 'https://positivus-gamma.vercel.app/',
    code: 'https://github.com/zhekabaila/positivus-next',
  },
  {
    title: 'Ghia Farm',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/images/projects/ghia-farm.png',
    technology: ['html', 'tailwind css', 'javascript', 'php'],
    demo: 'https://ghia-farm-sawala-tech.vercel.app/',
    code: '',
  },
  {
    title: 'Pionicon',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iure natus ad, tempore dignissimos, vero at architecto sequi amet nam debitis maiores qui sed odio! Rem, repellendus dolorem.',
    img: '/images/projects/pionicon.png',
    technology: ['html', 'tailwind css', 'javascript', 'php'],
    demo: 'https://pionicon.vercel.app/',
    code: '',
  },
]
