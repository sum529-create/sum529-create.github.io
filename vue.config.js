module.exports = {
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/sum529-create.github.io/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "노수민 | 프론트엔드 개발자 포트폴리오";
      return args;
    });
  },
  configureWebpack: {
    output: {
      publicPath:
        process.env.NODE_ENV === "production"
          ? "/sum529-create.github.io/"
          : "/",
    },
  },
};
