/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include Flowbite content here
    require("flowbite-react/tailwind").content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Include Flowbite plugin here
    require("flowbite-react/tailwind").plugin(),
  ],
};
