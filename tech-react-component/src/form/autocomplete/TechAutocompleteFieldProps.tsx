import { FieldProps } from 'formik';

export interface TechAutocompleteFieldProps extends FieldProps {
    label?: string;
    options?: any[];
}