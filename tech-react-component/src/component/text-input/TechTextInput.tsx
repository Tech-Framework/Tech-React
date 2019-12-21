import * as React from 'react';
import TextField from '@material-ui/core/TextField';

export const TechTextInput = (props: any) => (
    <TextField  label={props.label} {...props}/>
);