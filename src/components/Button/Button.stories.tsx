// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';


export default {
    title: 'Component/Button',
    component: Button,
};

const Template = (args: any) => (
    <Button {...args} />
);

const props = {
    defaultProps: () => ({
        label: 'Click me',
        backgroundColor: '#b4d455'
    }),
};

export const buttonDefault: any = Template.bind({});
const defaultProps = props.defaultProps();
buttonDefault.storyName = 'Primary';
buttonDefault.args = {
    ...defaultProps,
};
export const buttonSecondary: any = Template.bind({});
buttonSecondary.storyName = 'Secondary';
buttonSecondary.args = {
    ...defaultProps,
    backgroundColor: 'blue',
    label: 'Secondary'
};

export const buttonTertiary: any = Template.bind({});
buttonTertiary.storyName = 'Tertiary';
buttonTertiary.args = {
    ...defaultProps,
    backgroundColor: 'Red',
    label: 'Tertiary'
}