
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        petrol: {
          DEFAULT: '#1f4e5f',
          dark: '#173b48',
          light: '#2a6679',
        },
        bluegray: {
          DEFAULT: '#4a6572',
          light: '#6a818c',
        },
        cloud: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
}
