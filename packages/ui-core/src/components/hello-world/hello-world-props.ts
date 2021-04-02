import { CommonComponentProps } from '@components';

export interface StyleProps {
    /** Color text */
    colorText?: string;
}

export interface HelloWorldProps extends CommonComponentProps, StyleProps {
    /** Name of person to say hi*/
    name?: string;

    /** Onclick event  */
    onClick?: () => void;
}
