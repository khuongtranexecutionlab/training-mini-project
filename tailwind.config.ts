import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px'
      },
      boxShadow: {
        myShadow1: '4.1px -5px 0 0 rgb(255, 255, 255)',
        myShadow2: '-4.1px -5px 0 0 rgb(255, 255, 255)'
      },
      colors: {
        accent: '#FF8F9C',
        blackish: '#1b1b1b'
      }
    }
  },
  plugins: []
};
export default config;
