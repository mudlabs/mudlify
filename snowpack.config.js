// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      ".cms": "/",
      "app/public": "/",
    },
    devOptions: {
      fallback: ".fallback.html"
    },
    plugins: [
      [ "mudlify-snowpack-plugin", { config: "mudlify.yaml" } ]
    ],
    exclude: [ ".fallback.html" ],
    buildOptions: {
      metaDir: ".snowpack",
      out: ".build",
      baseUrl: "/",
      clean: true
    },
  };
  