export interface GridProps {
    key: string;
    gridCols: number;
    gridGap: string;
    margin: string;
}

export interface GridSystem {
    sMin: GridProps;
    mMin: GridProps;
    lMin: GridProps;
    xlMin: GridProps;
}
