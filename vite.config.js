import watchAndRun from '@kitql/vite-plugin-watch-and-run'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  plugins: [
    watchAndRun([
      {
        watch: '**/*.(gql|graphql)',
        run: 'pnpm run gen',
      },
    ]),
  ],
}

export default config
