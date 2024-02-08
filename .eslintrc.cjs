module.exports = {
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:jest/recommended'
    // 'plugin:sonarjs/recommended'
  ],
  plugins: ['jest', 'react-hooks' /*'sonarjs'*/],
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  rules: {
    // disabled for condition && someFunc()
    'no-unused-vars': ['warn', { args: 'after-used' }],
    'no-unused-expressions': 'off',
    'arrow-body-style': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    'no-shadow': 'off',
    'no-case-declarations': 'off',

    // just the formatting issues, prettier does all the job
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'arrow-parens': [2, 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],

    // increase max line length to 120
    'max-len': [
      'error',
      120,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true
      }
    ],

    // pray that backend developer will send sanatized html
    'react/no-danger': 'off',

    // there is no need to pass default props all the time
    'react/require-default-props': 'off',

    // sort react component properties whatever you like
    'react/sort-comp': 'off',

    // dont want to limits every line in JSX to one expression each.
    'react/jsx-one-expression-per-line': 'off',

    // no need to force to .jsx file extension
    'react/jsx-filename-extension': 'off',

    // no need to destructure all the time
    'react/destructuring-assignment': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // redux actions do not work well with this
    'import/prefer-default-export': 'off',
    // this rule throws an error with imported prop-types
    // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'react/no-typos': 'off',

    // turning off - but use whenever it is possible
    'react/forbid-prop-types': 'off',

    // turning off because of bug
    'react/button-has-type': 'off',

    'comma-dangle': ['error', 'never'],

    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-webpack-loader-syntax': 'off',

    //turning off since we need to have autofocus
    'jsx-a11y/no-autofocus': 'off',
    // deprecated
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
