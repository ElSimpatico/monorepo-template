import { createUseStyles } from 'react-jss';

import { StyleProps } from './hello-world-props';

export const useStyles = createUseStyles<any, StyleProps>(({}) => {
    return {
        wrapper: {
            color: ({ colorText }) => (colorText ? colorText : 'black'),
        },
    };
});
