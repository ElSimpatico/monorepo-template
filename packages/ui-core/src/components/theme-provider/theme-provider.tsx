import React, { ReactElement, useEffect, useState } from 'react';
import { jss, ThemeProvider as ThemeProviderJss } from 'react-jss';
import { StyleSheet } from 'jss';

import { themes, Theme, LightTheme } from '@themes';
import { createGridSystem } from '@themes/base/grid';

import { ThemeProviderProps } from './theme-provider-props';

export function ThemeProvider(props: ThemeProviderProps): ReactElement {
    const [theme, setTheme] = useState<Theme>(LightTheme);
    const [stylesSheet, setStylesSheet] = useState<StyleSheet>();
    const [gridSheet, setGridSheet] = useState<StyleSheet>();

    useEffect(() => {
        const newTheme: Theme =
            typeof props.theme === 'string' ? themes[props.theme] : props.theme;
        setTheme(newTheme);
    }, [props.theme]);

    useEffect(() => {
        const newStyleSheet = jss.createStyleSheet({ ...theme['@global'] });
        setStylesSheet(newStyleSheet);
        newStyleSheet.attach();

        if (theme && theme.grid) {
            const newGridSheet = jss.createStyleSheet(
                {
                    ...createGridSystem(theme.grid, theme.breakpoints),
                },
                { generateId: (rule) => rule.key },
            );
            setGridSheet(newGridSheet);
            newGridSheet.attach();
        }
    }, [theme]);

    useEffect(() => {
        return (): void => {
            stylesSheet && jss.removeStyleSheet(stylesSheet);
            gridSheet && jss.removeStyleSheet(gridSheet);
        };
    }, [stylesSheet, gridSheet]);

    return <ThemeProviderJss theme={theme}>{props.children}</ThemeProviderJss>;
}
