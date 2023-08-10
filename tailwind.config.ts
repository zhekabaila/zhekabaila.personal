import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['var(--font-lobster)'],
      },
      colors: {
        primary: '#528bd9',
        secondary: '#f5f5f5',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        dark: '#4c4c4c',
      },
    },
  },
  plugins: [],
}
export default config
