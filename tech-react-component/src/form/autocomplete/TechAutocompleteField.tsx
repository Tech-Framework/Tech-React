import React from 'react';
import { FieldProps } from 'formik';
  
export class TechAutocompleteField extends React.Component<FieldProps>{

    render(){
        return (
            <input {...this.props.field}/>
        );
    }

}