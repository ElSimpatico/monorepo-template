import { CommonComponentProps } from '../common-component-props';

export interface HelloWorldProps extends CommonComponentProps {
    /** Name of person to say hi*/
    name?: string;

    /** Onclick event  */
    onClick?: () => void;
}
