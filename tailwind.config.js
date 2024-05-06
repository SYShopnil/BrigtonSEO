const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Axiforma', ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1172px',
        '2xl': '1352px',
        'max-md': { raw: '(max-width: 991px)' },
        'max-sm': { raw: '(max-width: 767px)' },
      },
      colors: {
        primary: '#0C5EE8',
        primaryLight: '#317AF5',
        secondary: '#13A1C5',
        secondaryLight: '#16B8E1',
        success: '#35B958',
        successLight: '#6FD189',
        danger: '#EA4335',
        dangerLight: '#FA6B5F',
        warning: '#FBBC05',
        warningLight: '#FCCB3C',
        black: '#141D2E',
        blackLight: '#3D434F',
        ghost: '#CED4DA',
        gray: '#EFF4FA',
        grayLight: '#F8F9FA',
        white: '#FFFFFF',
        body: '#FBFBFB',
        pink: '#DF6772',
        purple: '#5542DB',
        avocado: '#A2B53A',
        mint: '#43B692',
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
        primaryLightGradient:
          'linear-gradient(198.61deg, #0C5EE8 12.59%, #317AF5 87.41%)',
        primaryLightGradientReverse:
          'linear-gradient(198.61deg, #317AF5 12.59%, #0C5EE8 87.41%)',
        secondaryGradient: 'linear-gradient(180deg, #13A1C5 0%, #16B8E1 100%)',
        secondaryLightGradient:
          'linear-gradient(270deg, #16B8E1 0%, #13A1C5 100%)',
        secondaryLightGradientReverse:
          'linear-gradient(180deg, #16B8E1 0%, #13A1C5 100%)',
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.031em' }], // 14px - lh: 150% - ls: 0.5px
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.031em' }], // 16px - lh: 150% - ls: 0.5px
        md: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.031em' }], // 18px - lh: 150% - ls: 0.5px
        lg: ['1.25rem', { lineHeight: '1.5' }], // 20px - lh: 150%
        xl: ['1.5rem', { lineHeight: '1.4' }], // 24px - lh: 140%
        '2xl': ['1.75rem', { lineHeight: '1.3' }], // 28px - lh: 130%
        '3xl': ['2rem', { lineHeight: '1.2' }], // 32px - lh: 120%
        '4xl': ['3rem', { lineHeight: '1.1' }], // 48px - lh: 110%
        '5xl': ['5rem', { lineHeight: '1.2' }], // 80px - lh: 120%
      },
      keyframes: {
        toRightFromLeft: {
          '49%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)', opacity: '0' },
          '51%': { opacity: '1' },
        },
      },
      animation: {
        toRightFromLeft: 'toRightFromLeft 0.5s forwards',
      },
      boxShadow: {
        1: '0px 9px 80px rgba(21, 31, 49, 0.07), 0px 1.12694px 10.0172px rgba(21, 31, 49, 0.035)',
        2: '0px 11px 20px rgba(12, 94, 232, 0.16)',
        3: '0px 9px 63px rgba(21, 31, 49, 0.07), 0px 1.12694px 7.88858px rgba(21, 31, 49, 0.035)',
      },
      borderRadius: {
        lg: '.5rem',
        xl: '.625rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
