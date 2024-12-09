/** @type {import('tailwindcss').Config} */

import { iconCheck } from "./src/theme/icons.ts";

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1050px',
      xl: '1400px',
    },
    colors: {
      transparent: 'rgba(0, 0, 0, 0)',
      neutral: {
        1: 'var(--color-neutral-1)',
        2: 'var(--color-neutral-2)',
        3: 'var(--color-neutral-3)',
        4: 'var(--color-neutral-4)',
        5: 'var(--color-neutral-5)',
        6: 'var(--color-neutral-6)',
      },
      primary: {
        DEFAULT: 'var(--color-primary)',
        1: 'var(--color-primary-1)',
        2: 'var(--color-primary-2)',
        3: 'var(--color-primary-3)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
      },
      background: {
        1: 'var(--color-bg-1)',
        2: 'var(--color-bg-2)',
      }
    },
    extend: {
      fontFamily: {
        openSans: ['var(--font-family)', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.25)',
      },
      content: {
        tooltip: 'attr(aria-label)',
        check: `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(iconCheck)}")`,
      },
    },
  },
};
