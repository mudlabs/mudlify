// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      ".cms": "/",
      public: "/",
      admin: "/admin",
      assets: "/assets",
      ".cms/media": "/assets/media",
    },
    devOptions: {
      fallback: ".fallback.html"
    },
    plugins: [
      [ "@mudlabs/mudlify-snowpack-plugin", { config: "mudlify.yaml" } ]
      // [ 
      //   "@snowpack/plugin-babel", 
      //   { 
      //     input: [".js"],
      //     transformOptions: {
      //       presets: [
      //         [
      //           "@babel/preset-env",
      //           {
      //             targets: "last 2 versions, > 0.25%, not dead"
      //           }
      //         ]
      //       ]
      //     } 
      //   }
      // ],
      // "@snowpack/plugin-optimize"
    ],
    exclude: [ ".fallback.html" ],
    buildOptions: {
      htmlFragments: true,
      metaUrlPath: ".snowpack",
      out: ".build",
      baseUrl: "/",
      clean: true
    },
  };
  