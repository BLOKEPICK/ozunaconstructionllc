export default {
  content:["./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme:{extend:{colors:{indigo:"#1E2A7B",green:"#009345"}}},
  plugins:[
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ]
}