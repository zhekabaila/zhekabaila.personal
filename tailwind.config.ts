import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stabilo: '#b9ff66',
      },
      boxShadow: {
        button: '7px 7px 0px 3px #000',
        figure: '14px 14px 0px 3px #000',
      },
    },
  },
  plugins: [],
} satisfies Config
