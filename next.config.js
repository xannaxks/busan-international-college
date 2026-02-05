const withMDX = require('@next/mdx')({
  // optional: add remark/rehype plugins here later
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
