module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-css-variables')({}),
    require('postcss-rem')({
      baseline: 13
    })
  ]
};
