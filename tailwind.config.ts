import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#892CDC',
        'primary-200': '#BC6FF1',
        'primary-300': '#fdf6fd',
        'accent-100': '#D9ACF5',
        'accent-200': '#fff4ff',
        'text-100': '#EEEEEE',
        'text-200': '#FDEBED',
        'bg-100': '#222831',
        'bg-200': '#393E46',
        'bg-300': '#454e59',
      },
    },
    fontFamily: {
      abel: ['var(--font-abel)'],
    },
    backgroundImage: {
      'left-light': 'linear-gradient(145deg, #ffffff, #e6dfd8)',
      'right-light': 'linear-gradient(60deg, #e6dfd8, #ffffff)',
    },
    boxShadow: {
      even: '-9px 9px 3px #c7c7c7, -9px 9px 3px #f9f9f9',
      odd: '9px 9px 3px #c7c7c7, -9px -9px 3px #f9f9f9',
      profil: '6px 6px 5px #d6d0ca,-6px -6px 5px #ffffff',
    },
  },
  plugins: [],
}
export default config
