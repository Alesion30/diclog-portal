module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        up: 'upAnime 0.5s forwards',
        down: 'downAnime 0.5s forwards',
        fadeIn: 'fadeInAnime 2s forwards',
        fadeOut: 'fadeOutAnime 1s forwards',
      },
      keyframes: () => ({
        upAnime: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100px)' },
        },
        downAnime: {
          from: { transform: 'translateY(-100px)' },
          to: { transform: 'translateY(0)' },
        },
        fadeInAnime: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        },
        fadeOutAnime: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
