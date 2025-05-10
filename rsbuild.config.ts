import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import * as path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    publicDir: [
      {
        name: path.join(
          __dirname,
          '../',
          'capy',  // Current project name
          'dist',
        ),
      },
    ],
  },
});
