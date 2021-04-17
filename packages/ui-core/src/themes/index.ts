import { LightTheme } from './light';
import { DarkTheme } from './dark';
import { Theme } from './models';

export * from './light';
export * from './models';

export const themes: { [index: string]: Theme } = {
    light: LightTheme,
    dark: DarkTheme,
};
