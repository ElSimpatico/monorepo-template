import { Breakpoints } from './breakpoints';

export interface Theme {
    '@global': any;
    variables: {
        breakpoints: Breakpoints;
        colors?: {
            primary: string;
            background: string;
        };
    };
}
