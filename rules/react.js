import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    files: ['**/*.jsx', '**/*.tsx'],
    ...reactRecommended,
    ...reactJsxRuntime,
    rules: {
      'react/boolean-prop-naming': [
        'error',
        {
          message:
            'Invalid boolean prop name, use one of (is|has|show|hide) prefixes.',
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(is|has|show|hide)[A-Z]([A-Za-z0-9]?)+',
        },
      ],
      'react/default-props-match-prop-types': [
        'error',
        { allowRequiredDefaults: true },
      ],
      'react/display-name': ['off'],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/hook-use-state': ['warn', { allowDestructuredState: true }],
      'react/no-access-state-in-setstate': 'error',
      'react/no-adjacent-inline-elements': 'error',
      'react/no-array-index-key': 'warn',
      'react/no-arrow-function-lifecycle': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-multi-comp': 'error',
      'react/no-namespace': 'error',
      'react/no-redundant-should-component-update': 'error',
      'react/no-invalid-html-attribute': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unsafe': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/no-unused-class-component-methods': 'warn',
      'react/no-unused-prop-types': [
        'error',
        {
          customValidators: [],
          skipShapeProps: true,
        },
      ],
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': ['error', 'always'],
      'react/prefer-stateless-function': 'error',
      'react/prop-types': [
        'warn',
        {
          customValidators: [],
          ignore: [],
          skipUndeclared: false,
        },
      ],
      'react/require-render-return': 'error',
      'react/no-unknown-property': 'warn',
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': ['error', 'always'],
      'react/static-property-placement': [
        'error',
        'property assignment',
        {
          childContextTypes: 'static getter',
          contextType: 'static getter',
          contextTypes: 'static getter',
          defaultProps: 'static getter',
          displayName: 'static getter',
          propTypes: 'static getter',
        },
      ],
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',

      // jsx specifics
      'react/jsx-boolean-value': [
        'error',
        'never',
        {
          always: [],
        },
      ],
      'react/jsx-child-element-spacing': 'error',
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          children: 'never',
          props: 'never',
        },
      ],
      'react/jsx-curly-newline': [
        'error',
        {
          multiline: 'consistent',
          singleline: 'consistent',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-handler-names': [
        'warn',
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
          checkLocalVariables: true,
          checkInlineFunction: true,
        },
      ],
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'multiline',
        },
      ],
      'react/jsx-newline': ['error', { prevent: true }],
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-one-expression-per-line': [
        'error',
        {
          allow: 'single-child',
        },
      ],
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-wrap-multilines': [
        'error',
        {
          arrow: 'parens-new-line',
          assignment: 'parens-new-line',
          condition: 'parens-new-line',
          declaration: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],
    },
  },
];
