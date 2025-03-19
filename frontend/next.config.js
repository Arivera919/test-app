/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
      },
    });

    return config;
  },
};

module.exports = nextConfig;
