import type { Linter } from 'eslint';
import type { Options as PrettierOptions } from 'prettier';

export type FlatConfigArray = Linter.Config[];

export const base: FlatConfigArray;
export const stylistic: FlatConfigArray;
export const javascript: FlatConfigArray;
export const imprt: FlatConfigArray;
export const vitest: FlatConfigArray;
export const prettier: FlatConfigArray;
export const prettierOptions: PrettierOptions;
export const react: FlatConfigArray;
export const typescript: FlatConfigArray;
export const unusedImports: FlatConfigArray;
export const typescriptTypeChecked: FlatConfigArray;
export const sonarjs: FlatConfigArray;
export const unicorn: FlatConfigArray;
export const sortClassMembers: FlatConfigArray;
