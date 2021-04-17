import React, { ReactElement, useEffect, useState } from 'react';
import { jss, ThemeProvider as ThemeProviderJss } from 'react-jss';

import { ThemeProviderProps } from './theme-provider-props';
import { themes, Theme, LightTheme } from '@themes';

export function ThemeProvider(props: ThemeProviderProps): ReactElement {
    const [theme, setTheme] = useState<Theme>(LightTheme);

    useEffect(() => {
        if (props.theme) {
            const newTheme: Theme =
                typeof props.theme === 'string'
                    ? themes[props.theme]
                    : props.theme;
            setTheme(newTheme);
        }
    }, [props.theme]);

    useEffect(() => {
        const newStyleSheet = jss.createStyleSheet({ ...theme['@global'] });
        newStyleSheet.attach();

        return (): void => {
            jss.removeStyleSheet(newStyleSheet);
        };
    }, [theme]);

    return <ThemeProviderJss theme={theme}>{props.children}</ThemeProviderJss>;
}
