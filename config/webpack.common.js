const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 보통 저는 사용합니다.

module.exports = {
  // webpack의 진입점(entry point)
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    // webpack의 모듈 로더(module loaders)
    rules: [
      {
        /**
         * Babel은 ES6+ 문법을 ES5 형태로 변환하여 브라우저 호환성을 확보
         */
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        /**
         * 별도의 파일로 추출하여 번들(output)디렉토리에 복사 URL이 포함되며
         * 웹팩 번들과 별개로 로드. 대용량 파일(ex: 이미지, 폰트 등)를 처리하는데 용이
         * 브라우저의 HTTP 캐싱으로 활용하여 빠른 로딩 성능 제공
         */
        test: /\.(png|jpeg|jpg|gif|svg)$/, // 확장자에 따라 asset/resource 사용
        type: "asset/resource",
      },
      {
        /**
         * 웹팩 번들 자체에 인라인 형태로 포함 즉, 파일의 데이터를 Base64 인코딩 후
         * 웹팩번들에 직접 포함 따라서 파일의 데이터가 포함되어 크기가 증가하게된다.
         * 작은 크기의 파일(ex: 작은아이콘, 작은이미지 등) 처리할 때 유용하며
         * 추가적인 파일 요청을 줄여서 네트워크 비용을 줄일 수 있다.
         */
        test: /\.ico/, // .ico 확장자에 대해서만 asset/inline 사용
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // HTML 파일 생성
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      // 전역 'React' 사용
      React: "react",
    }),
  ],
  resolve: {
    // webpack 모듈을 해석(resolve)하는 방법
    alias: {
      // '@' 별칭을 통해 프로젝트 루트 디렉토리 경로 설정
      "@": path.resolve(__dirname, "../src/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
