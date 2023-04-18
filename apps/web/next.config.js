
const path = require('path')
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../")
    outputFileTracingRoot: path.join(__dirname, "../docs")
  }
};
