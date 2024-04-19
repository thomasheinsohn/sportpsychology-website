import createNextIntlPlugin from 'next-intl/plugin'
import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withNextIntl = createNextIntlPlugin() // Create the NextIntl plugin instance
const withMDX = nextMDX({
  // Configure MDX with remark and rehype plugins
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // Specify page extensions
}

export default withNextIntl(withMDX(nextConfig)) // Compose both configurations
