const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // 개발 모드 설정(압축 최소화 X, 난독화X)
  devtool: "inline-source-map", // 소스 맵을 웹팩 번들 파일에 인라인으로 포함하여 디버깅 위한 소스맵 생성
  devServer: {
    // 개발 서버에 대한 설정
    open: true, // 서버 실행 시 브라우저를 자동으로 연다
    hot: true, // HMR(Hot Module Replacement) 활성화하여, 수정된 모듈의 일부만 다시 로드하여 개발 시간 단축
    compress: true, // 응답 데이터를 gzip으로 압축하여 전송
    port: 8081, // 개발 서버의 포트 번호를 8081로 설정합니다.
    historyApiFallback: true, //  SPA(Single Page Application)에서 브라우저의 뒤로 가기와 같은 네비게이션을 처리
    liveReload: true, // 일이 수정되었을 때 자동으로 페이지를 다시 로드
  },
  output: {
    // 번들된 파일의 출력 설정
    filename: "[name].[contenthash].js", // [name]은 entry에서 정의한 이름사용
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
