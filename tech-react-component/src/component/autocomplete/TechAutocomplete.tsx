import React from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';

export const TechAutocomplete = (props: any) => {
    const {options, getOptionLabel, field, ...textFieldProps} = props;
    return (
        <Autocomplete options={options} getOptionLabel={getOptionLabel}
            {...field}
            onChange={(event, value)=>{
                field?.onChange({target: {
                    name: field.name ,type:"change", value: value
                }})}}
            renderInput={params => <TextField {...params} {...textFieldProps} fullWidth/>}
        />
    );
};