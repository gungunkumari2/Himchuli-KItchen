import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the GitHub repository name for project Pages:
// https://gungunkumari2.github.io/Himchuli-KItchen/
const repoName = 'Himchuli-KItchen'
const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ command, isPreview }) => ({
  // Local `vite` stays at `/`; production build + preview use the repo base.
  base: command === 'build' || isPreview ? `/${repoName}/` : '/',
  plugins: [
    react(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const indexHtml = resolve(rootDir, 'dist/index.html')
        const notFoundHtml = resolve(rootDir, 'dist/404.html')
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, notFoundHtml)
        }
      },
    },
  ],
}))
