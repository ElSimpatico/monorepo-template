import { Breakpoints } from './breakpoints';
import { GridSystem } from './grid';

export interface Theme {
    '@global': any;
    breakpoints: Breakpoints;
    colors?: {
        primary: string;
        background: string;
    };
    grid?: GridSystem;
}
