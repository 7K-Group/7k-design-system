module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-custom-properties': {
      preserve: true,
    },
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: { removeAll: true },
      }],
    } : false,
  },
};
