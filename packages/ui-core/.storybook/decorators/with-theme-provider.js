import { ThemeProvider } from '../../src/components';

export const withThemeProvider = (Story, context) => {
    return (
        <ThemeProvider theme={context.globals.theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};
