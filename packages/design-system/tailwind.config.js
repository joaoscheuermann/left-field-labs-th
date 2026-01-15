const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['36px', { lineHeight: '46px', letterSpacing: '0' }],
        'title-lg': ['28px', { lineHeight: '34px', letterSpacing: '0' }],
        'title-md': ['24px', { lineHeight: '30px', letterSpacing: '0' }],
        'title-sm': ['22px', { lineHeight: '28px', letterSpacing: '0' }],
        'headline-lg': ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '0' }],
        'subhead-lg': ['16px', { lineHeight: '20px', letterSpacing: '0' }],
        'subhead-sm': ['16px', { lineHeight: '18px', letterSpacing: '0' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'body-md': ['14px', { lineHeight: '22px', letterSpacing: '0' }],
        'body-sm': ['12px', { lineHeight: '18px', letterSpacing: '0' }],
        'label-lg': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
        'label-md': ['14px', { lineHeight: '22px', letterSpacing: '0' }],
        'label-sm': ['12px', { lineHeight: '18px', letterSpacing: '0' }],
        caption: ['10px', { lineHeight: '16px', letterSpacing: '0' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        xbold: '800',
      },
    },
  },
  plugins: [],
};
