import * as React from 'react';
import {TextField} from '@material-ui/core';

export const TechTextInput = (props: any) => (
    <TextField  label={props.label} {...props}/>
);