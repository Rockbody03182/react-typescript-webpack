module.exports = {
  plugins: [
    [
      "postcss-preset-env", // 플러그인 옵션 설정 postcss-preset-env 적용시 autoprefixer 라이브러리를 따로 다운받지 않아도된다.
      {
        browsers: "> 2% in KR, defaults, not IE < 11", // 0% 변경시 postcss 적용 확인가능
        autoprefixer: { grid: "autoplace" }, // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
      },
    ],
    ["postcss-short", { prefix: "x", skip: "-" }], // https://www.smashingmagazine.com/2015/12/introduction-to-postcss/#extended-shorthand-properties-with-short 자세한설명
  ],
};
