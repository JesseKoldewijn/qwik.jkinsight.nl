import { defineConfig } from "vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { qwikCity } from "@builder.io/qwik-city/vite"
import { qwikReact } from "@builder.io/qwik-react/vite"

import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(() => {
  return {
    plugins: [qwikCity({
      routesDir: "src/pages",
      mdxPlugins: {
        remarkGfm: false,
        rehypeSyntaxHighlight: false,
        rehypeAutolinkHeadings: false,
      },
      mdx: {
        rehypePlugins: [
          // Plugins can now be added manually to use a different configuration
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      },
    }), qwikVite(), tsconfigPaths(), qwikReact()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=6000",
      },
    },
  }
})
