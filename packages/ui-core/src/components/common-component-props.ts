export interface CommonComponentProps {
    /** Unique id for component */
    id?: string;

    /** Class for component */
    className?: string;

    /** Children of component*/
    children?: string | JSX.Element | JSX.Element[];
}
