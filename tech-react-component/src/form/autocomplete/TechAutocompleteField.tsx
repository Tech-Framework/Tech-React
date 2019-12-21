import * as React from 'react';
import { TechAutocomplete } from 'component/autocomplete/TechAutocomplete';
import { TechAutocompleteFieldProps } from './TechAutocompleteFieldProps';
  
export class TechAutocompleteField extends React.Component<TechAutocompleteFieldProps>{

    render(){
        const {field, form, meta, ...otherProps} = this.props;
        return (
            <TechAutocomplete field={field} {...otherProps}/>
        );
    }

}