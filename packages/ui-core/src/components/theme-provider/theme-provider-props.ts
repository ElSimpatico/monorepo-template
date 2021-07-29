import { Theme } from '@themes/models';

export interface ThemeProviderProps {
    children?: string | JSX.Element | JSX.Element[];
    theme: 'light' | 'dark' | Theme;
}
