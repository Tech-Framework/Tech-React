import React from 'react';
import { TechTextInput } from 'component/text-input/TechTextInput';
import { TechTextInputFieldProps } from './TechTextInputFieldProps';
  
export class TechTextInputField extends React.Component<TechTextInputFieldProps>{

    render(){
        return (
            <TechTextInput label={this.props.label} {...this.props.field}/>
        );
    }

}