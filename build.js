import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/bundle.cjs',
}).catch(() => process.exit(1))
