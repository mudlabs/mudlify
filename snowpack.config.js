// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      ".cms": "/",
      "app/public": "/",
      "app/assets": "/assets",
      ".cms/media": "/assets/media",
      admin: "/admin",
    },
    devOptions: {
      fallback: ".fallback.html"
    },
    plugins: [
      // [ "mudlify-snowpack-plugin", { config: "mudlify.yaml" } ]
      [ 
        "@snowpack/plugin-babel", 
        { 
          input: [".js"],
          transformOptions: {
            presets: [[
              "@babel/preset-env",
              {
                targets: "last 2 versions, not ie < 10, > 0%"
              }
            ]]
          } 
        }
      ],
      "@snowpack/plugin-optimize"
    ],
    exclude: [ ".fallback.html" ],
    buildOptions: {
      metaDir: ".snowpack",
      out: ".build",
      baseUrl: "/",
      clean: true
    },
  };
  