import * as React from 'react';
import {TextField} from '@material-ui/core';
import { TechTextInputProps } from './TechTextInputProps';

export const TechTextInput = (props: TechTextInputProps) => (
    <TextField label={props.label} {...props}/>
);