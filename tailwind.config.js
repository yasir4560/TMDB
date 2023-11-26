/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: 'rgb(3,37,65)',
        tmbdLightGreen: 'rgb(30,213,169)',
        tmbdLightBlue: 'rgb(1,180,228)'
      },
      backgroundImage:{
        banner: 'linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/9xfDWXAUbFXQK585JvByT5pEAhe.jpg")'
      }
    },
  },
  plugins: [],
}
