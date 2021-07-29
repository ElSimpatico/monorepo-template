import React, { ReactElement } from 'react';

import { Meta } from '@storybook/react';
import { useTheme, createUseStyles } from 'react-jss';

import { Theme } from '@themes';
import mdx from './grid-system.mdx';
import { getMinBreakpoint } from '@utils/breakpoints';

export default {
    title: 'Design/Grid System',
    parameters: {
        docs: {
            page: mdx,
        },
    },
    argTypes: {
        columnsBackgorundColor: {
            control: 'color',
        },
        columnsColor: {
            control: 'color',
        },
    },
} as Meta;

const useStyles = createUseStyles<any, any, Theme>((theme) => ({
    container: {
        border: '1px solid black',
    },
    column: {
        minHeight: '50px',
        backgroundColor: ({ columnsBackgorundColor }): string =>
            columnsBackgorundColor,
        color: ({ columnsColor }): string => columnsColor,

        border: '1px solid black',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    showS: {
        display: 'block',
        [getMinBreakpoint(theme.breakpoints.mMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.lMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.xlMin)]: {
            display: 'none',
        },
    },
    showM: {
        display: 'none',
        [getMinBreakpoint(theme.breakpoints.mMin)]: {
            display: 'block',
        },
        [getMinBreakpoint(theme.breakpoints.lMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.xlMin)]: {
            display: 'none',
        },
    },
    showL: {
        display: 'none',
        [getMinBreakpoint(theme.breakpoints.mMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.lMin)]: {
            display: 'block',
        },
        [getMinBreakpoint(theme.breakpoints.xlMin)]: {
            display: 'none',
        },
    },
    showXL: {
        display: 'none',
        [getMinBreakpoint(theme.breakpoints.mMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.lMin)]: {
            display: 'none',
        },
        [getMinBreakpoint(theme.breakpoints.xlMin)]: {
            display: 'block',
        },
    },
}));

export const GridSystemDefault = (args: any): ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...args, theme });
    if (!theme.grid) {
        return <div>{'Grid system is not defined!'}</div>;
    }
    return (
        <div className={`${classes.container} grid-container`}>
            <span className={classes.content}>grid-container</span>
            <div className="grid">
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-1 col-l-1 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-1</span>
                        <span className={classes.showL}>col-l-1</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const GridSystemWithTwoColumns = (args: any): ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...args, theme });
    if (!theme.grid) {
        return <div>{'Grid system is not defined!'}</div>;
    }
    return (
        <div className={`${classes.container} grid-container`}>
            <span className={classes.content}>grid-container</span>
            <div className="grid">
                <div
                    className={`${classes.column} col-s-2 col-m-6 col-l-8 col-xl-9`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-6</span>
                        <span className={classes.showL}>col-l-8</span>
                        <span className={classes.showXL}>col-xl-9</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-2 col-m-6 col-l-4 col-xl-3`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-6</span>
                        <span className={classes.showL}>col-l-4</span>
                        <span className={classes.showXL}>col-xl-3</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const GridSystemWithThreeColumns = (args: any): ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...args, theme });
    if (!theme.grid) {
        return <div>{'Grid system is not defined!'}</div>;
    }
    return (
        <div className={`${classes.container} grid-container`}>
            <span className={classes.content}>grid-container</span>
            <div className="grid">
                <div
                    className={`${classes.column} col-s-2 col-m-2 col-l-2 col-xl-3`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-2</span>
                        <span className={classes.showL}>col-l-2</span>
                        <span className={classes.showXL}>col-xl-3</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-2 col-m-2 col-l-8 col-xl-6`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-2</span>
                        <span className={classes.showL}>col-l-8</span>
                        <span className={classes.showXL}>col-xl-6</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-2 col-m-2 col-l-2 col-xl-3`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-2</span>
                        <span className={classes.showL}>col-l-2</span>
                        <span className={classes.showXL}>col-xl-3</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const GridSystemColumns = (args: any): ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...args, theme });
    if (!theme.grid) {
        return <div>{'Grid system is not defined!'}</div>;
    }
    return (
        <div className={`${classes.container} grid-container`}>
            <span className={classes.content}>grid-container</span>
            <div className="grid">
                <div
                    className={`${classes.column} col-s-2 col-m-6 col-l-6 col-xl-2`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-6</span>
                        <span className={classes.showL}>col-l-6</span>
                        <span className={classes.showXL}>col-xl-2</span>
                    </div>
                </div>

                <div
                    className={`${classes.column} col-s-1 col-m-4 col-l-4 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-4</span>
                        <span className={classes.showL}>col-l-4</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-1 col-m-2 col-l-8 col-xl-1`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-1</span>
                        <span className={classes.showM}>col-m-2</span>
                        <span className={classes.showL}>col-l-8</span>
                        <span className={classes.showXL}>col-xl-1</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-2 col-m-6 col-l-6 col-xl-10`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-6</span>
                        <span className={classes.showL}>col-l-6</span>
                        <span className={classes.showXL}>col-xl-10</span>
                    </div>
                </div>
                <div
                    className={`${classes.column} col-s-2 col-m-5 col-l-12 col-xl-12`}
                >
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-5</span>
                        <span className={classes.showL}>col-l-12</span>
                        <span className={classes.showXL}>col-xl-12</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const GridSystemNested = (args: any): ReactElement => {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...args, theme });
    if (!theme.grid) {
        return <div>{'Grid system is not defined!'}</div>;
    }
    return (
        <div className={`${classes.container} grid-container`}>
            <span className={classes.content}>grid-container</span>
            <div className="grid">
                <div className={`${classes.column} col-s-2 col-m-4 col-l-8`}>
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-4</span>
                        <span className={classes.showL}>col-l-8</span>
                        <span className={classes.showXL}>col-l-8</span>
                    </div>
                    <div className="grid">
                        <div
                            className={`${classes.column} col-s-1 col-m-5 col-l-8`}
                        >
                            <div className={classes.content}>
                                <span className={classes.showS}>col-s-1</span>
                                <span className={classes.showM}>col-m-5</span>
                                <span className={classes.showL}>col-l-8</span>
                                <span className={classes.showXL}>col-l-8</span>
                            </div>
                        </div>
                        <div
                            className={`${classes.column} col-s-1 col-m-1 col-l-4`}
                        >
                            <div className={classes.content}>
                                <span className={classes.showS}>col-s-1</span>
                                <span className={classes.showM}>col-m-1</span>
                                <span className={classes.showL}>col-l-4</span>
                                <span className={classes.showXL}>col-l-4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.column} col-s-2 col-m-2 col-l-4`}>
                    <div className={classes.content}>
                        <span className={classes.showS}>col-s-2</span>
                        <span className={classes.showM}>col-m-2</span>
                        <span className={classes.showL}>col-l-4</span>
                        <span className={classes.showXL}>col-l-4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
