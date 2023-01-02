import React from 'react';
import {ButtonProps} from "./Button.types";
import { Button as ButtonMUI } from '@mui/material';

export const Button = (props: ButtonProps) => {
    const { backgroundColor, label } = props;

    return (
        <ButtonMUI style={{backgroundColor: backgroundColor}}>{label}</ButtonMUI>
    )
}

export default Button;