/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // <= Add this
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
