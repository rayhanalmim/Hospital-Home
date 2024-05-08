/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        flooding3: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        },
        flooding4: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        spin: 'spin 14s linear infinite',
        flooding3: 'flooding3 2s ease-in-out infinite',
        flooding4: 'flooding4 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};


