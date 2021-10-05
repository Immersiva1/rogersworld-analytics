const path = require('path');
const { defineConfig } = require('vite');

const entry = path.resolve(__dirname, 'src/index.ts');

module.exports = defineConfig({
  build: {
    lib: {
      entry,
      name: 'RogersWorldAnalytics',
      fileName: (format) => `analytics.${format}.js`,
    },
    sourcemap: true,
  },
});
