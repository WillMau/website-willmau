/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gradient: {
          blue: '#0ea5e9',
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)'
          },
          '50%': {
            opacity: '0.5',
            boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)'
          }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'pulse-node': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1'
          }
        },
        'data-flow': {
          '0%': {
            transform: 'translateX(-100%) scaleX(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateX(0%) scaleX(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateX(100%) scaleX(0)',
            opacity: '0'
          }
        },
        'network-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(14, 165, 233, 0.7)'
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(14, 165, 233, 0)'
          }
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'delay-100': 'fade-in-up 0.6s ease-out 0.1s both',
        'delay-200': 'fade-in-up 0.6s ease-out 0.2s both',
        'delay-300': 'fade-in-up 0.6s ease-out 0.3s both',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        'data-flow': 'data-flow 3s ease-in-out infinite',
        'network-pulse': 'network-pulse 2s ease-in-out infinite',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '400%': '400% 400%',
      },
      fontFamily: {
        sans: [
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
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
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.300'),
              },
            },
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
