import { GridProps } from '@themes/models/grid';

function createCols(colNumber: number, key: string): any {
    const colClasses: any = {};
    for (let i = 1; i <= colNumber; i++) {
        colClasses[`& > .col-${key}-${i}`] = {
            gridColumnEnd: `span ${i}`,
        };
    }
    return colClasses;
}

function createGrid(grid: GridProps): any {
    return {
        gridGap: grid.gridGap,
        gridTemplateColumns: `repeat(${grid.gridCols}, 1fr)`,
        '& > *': {
            gridColumnEnd: `span ${grid.gridCols}`,
        },
        ...createCols(grid.gridCols, grid.key),
    };
}

export function createGridSystem(gridSystem: any, breakpoints: any): any {
    const gridsByViewports = Object.keys(gridSystem)
        .filter((key: string) => key !== 'sMin')
        .reduce((accumulator: any, current: string) => {
            accumulator[`@media(min-width: ${breakpoints[current]})`] = {
                ...createGrid(gridSystem[current]),
            };
            return accumulator;
        }, {});

    const result = {
        'grid-container': {
            maxWidth: breakpoints.xlMax,
            margin: `0px ${gridSystem.sMin.margin}`,
            [`@media(min-width: ${breakpoints.mMin})`]: {
                margin: `0px ${gridSystem.sMin.margin}`,
            },
            [`@media(min-width: ${breakpoints.lMin})`]: {
                margin: `0px ${gridSystem.lMin.margin}`,
            },
            [`@media(min-width: ${breakpoints.xlMin})`]: {
                margin: '0 auto',
            },
        },
        grid: {
            display: 'grid',
            ...createGrid(gridSystem.sMin),
            ...gridsByViewports,
        },
    };

    return result;
}
