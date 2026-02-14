/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#ecfdf5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
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
            color: theme('colors.slate.700'),
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
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.300'),
              },
            },
            h1: { color: theme('colors.slate.100') },
            h2: { color: theme('colors.slate.100') },
            h3: { color: theme('colors.slate.100') },
            h4: { color: theme('colors.slate.100') },
            strong: { color: theme('colors.slate.100') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
