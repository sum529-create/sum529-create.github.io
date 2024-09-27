// eslint-disable-next-line no-undef
module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "노수민 | 프론트엔드 개발자 포트폴리오";
      return args;
    });
  },
};
