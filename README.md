# @jsimck/eslint-config
Very opinionated eslint config I use on my projects, includes: prettier, TS, jest, sonarqube and plugin-unicorn. It uses new eslint flat config.

## Install
```
npm i -D eslint @jsimck/eslint-config
```

## Usage
Create `eslint.config.js` in the root of your directory with following contents:

```js
import jsimckConfig from '@jsimck/eslint-config';

export default [...jsimckConfig];
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
