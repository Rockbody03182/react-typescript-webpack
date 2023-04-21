const { merge } = require("webpack-merge"); // webpack-merge 모듈을 사용
const common = require("./webpack.common"); // common이라는 다른 Webpack 설정 파일과 병합(merge)
const path = require("path"); // path 모듈을 사용하여 파일 경로를 조작

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS 파일을 별도의 파일로 추출
const TerserPlugin = require("terser-webpack-plugin"); // JavaScript 코드를 난독화하고 압축
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS 코드를 압축

module.exports = merge(common, {
  // common 설정과 병합하여 새로운 Webpack 설정
  mode: "production", // 배포용 환경 빌드
  devtool: "cheap-module-source-map", // 개발자 도구를 위한 소스맵 설정으로, 디버깅에 도움을 준다.
  output: {
    // 빌드된 파일의 출력 설정을 지정한다. 파일명, 경로, publicPath, clean 등의 옵션을 설정한다
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./",
    clean: true, // 빌드 시 이전 빌드 결과물이 제거되고 새로운 결과물이 생성되는 것을 보장
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()], // CSS 파일을 별도의 파일로 추출
  optimization: {
    //  번들링된 파일의 최적화 설정을 지정
    usedExports: true, // 사용되지 않는 내보내기
    minimize: true, // 코드 압축
    minimizer: [
      // 압축 플러그인
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all", // 코드 분할(chunks) 설정
    },
  },
  performance: {
    // 번들 파일 크기에 대한 경고 및 에러 메세지 구성
    hints: false, // 파일 크기 경고를 출력할지 여부
    maxEntrypointSize: 512000, // 최대 파일 크기 설정
    maxAssetSize: 512000, // 최대 파일 크기 설정
  },
});
