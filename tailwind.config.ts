import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fff8f0',
        dark: '#272727',
      },
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
