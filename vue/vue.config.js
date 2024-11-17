const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        // '/api' 로 들어오면 포트 8081(스프링 서버)로 보낸다
        target: "http://localhost:8081",
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      definitions[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] = "false";
      return definitions;
    });
  },
});
