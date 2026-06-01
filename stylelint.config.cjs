/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-no-hex': [
      true,
      {
        message: 'Use CSS custom properties (design tokens) instead of hex colors',
        severity: 'warning',
      },
    ],
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,
    'selector-class-pattern': null,
    'declaration-block-single-line-max-declarations': null,
    'rule-empty-line-before': null,
    'keyframes-name-pattern': null,
    'keyframe-block-no-duplicate-selectors': null,
    'number-max-precision': null,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'media-feature-range-notation': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'function-url-quotes': null,
    'font-family-name-quotes': null,
    'at-rule-empty-line-before': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['D', 'x'],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['optimizeLegibility', 'currentColor'],
      },
    ],
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
