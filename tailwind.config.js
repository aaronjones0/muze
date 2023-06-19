/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'ncs-sm': '-2px -2px 6px #000000',
        'ns-md': '4px 4px 12px #000000',
        'nch-sm': '2px 2px 6px #333333',
        'nh-md': '-4px -4px 12px #333333',
      }
    },
  },
  plugins: [],
}
