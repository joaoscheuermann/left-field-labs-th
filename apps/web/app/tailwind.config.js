const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const designSystemConfig = require('../../../packages/design-system/tailwind.config.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Presets allow us to inherit configuration from the design system
  presets: [designSystemConfig],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
