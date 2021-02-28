// See CommonComponentProps interface '../../src/components/common-component-props'
const commonComponentProps = ['id', 'className', 'children'];

function disableArgTypesControlCommonComponentProps() {
    return commonComponentProps.reduce((accumulator, current) => {
        accumulator[current] = {
            control: false,
        };
        return accumulator;
    }, {});
}

export const argTypes = {
    ...disableArgTypesControlCommonComponentProps(),
};
