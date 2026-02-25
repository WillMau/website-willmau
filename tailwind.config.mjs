/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#fef4f2',
          100: '#fde8e3',
          200: '#fcd0c8',
          300: '#f9b0a3',
          400: '#f48672',
          500: '#ec6249',
          600: '#d94a33',
          700: '#b63b28',
          800: '#97321f',
          900: '#7d2c1c',
        },
        salesforce: {
          50: '#f0f7ff',
          100: '#dceefb',
          200: '#b4d7f5',
          300: '#7fbfed',
          400: '#1b96ff',
          500: '#0176d3',
          600: '#014486',
          700: '#032d60',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1f33',
        },
      },
      fontFamily: {
        sans: [
          '"DM Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'delay-100': 'fade-in-up 0.5s ease-out 0.1s both',
        'delay-200': 'fade-in-up 0.5s ease-out 0.2s both',
        'delay-300': 'fade-in-up 0.5s ease-out 0.3s both',
        'delay-400': 'fade-in-up 0.5s ease-out 0.4s both',
        'shimmer': 'shimmer 2s infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.stone.700'),
            a: {
              color: theme('colors.accent.600'),
              '&:hover': {
                color: theme('colors.accent.700'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.stone.300'),
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.300'),
              },
            },
            h1: { color: theme('colors.stone.100') },
            h2: { color: theme('colors.stone.100') },
            h3: { color: theme('colors.stone.100') },
            h4: { color: theme('colors.stone.100') },
            strong: { color: theme('colors.stone.100') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
