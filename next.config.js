const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const CompressionPlugin = require("compression-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=315360000; includeSubDomains; preload"
  },
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable"
  }
]


module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    trailingSlash: true,
    webpack5: true,
    images: {
      domains: ["*"]
    },
    webpack: (config, options) => {
      config.plugins.push(
        new CompressionPlugin({
          algorithm: "gzip",
        })
      )
      // config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

      return config
    },
    headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ]
    },
  };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      assetPrefix: "",
      publicRuntimeConfig: {
        assetPrefix: "assets",
      }
    };
  }

  return {
    ...nextConfig,
    assetPrefix: "assets/rh",
    publicRuntimeConfig: {
      assetPrefix: "assets/rh",
    }
  };
};
