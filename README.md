# @jsimck/eslint-config
Very opinionated eslint config I use on my projects, includes: prettier, react, TS. It uses new **eslint flat config** format.

## Install
```
npm i -D eslint @jsimck/eslint-config
```

## Usage
Create `eslint.config.js` in the root of your directory with following contents:

```js
import baseConfig from '@jsimck/eslint-config';

export default [...baseConfig];
```

### Running eslint
Below is simple code snippet you can add to your package.json to run eslint:

```json
{
  "scripts": {
    "lint": "eslint './**/*.{js,ts,jsx,tsx,cjs,mjs}'"
  }
}
```

## FAQ

**Q: Does this work with VSCode eslint plugin?**

**A:** Yes, just make sure to enable `eslint.experimental.useFlatConfig: true` settings.
