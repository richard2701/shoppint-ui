/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ['via.placeholder.com', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
