/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.pinimg.com",
      "upload.wikimedia.org",
      "2.bp.blogspot.com",
      "upload.wikimedia.org",
      "cdn.pixabay.com"
    ],     
    },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = nextConfig
