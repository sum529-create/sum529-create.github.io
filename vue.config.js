module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '나의 Vue 앱';  // 원하는 제목으로 변경합니다.
        return args;
      });
  }
}
