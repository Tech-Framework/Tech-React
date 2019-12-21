import React from 'react';
import { Formik, Form, Field } from 'formik';
import { action } from '@storybook/addon-actions';
import { Grid } from '@material-ui/core';
import { TechButton } from 'component/button/TechButton';
import { TechAutocompleteField } from 'form/autocomplete/TechAutocompleteField';

export default {
    title: 'Component|Autocomplete/Form'
}

export const example = () => (
    <Formik initialValues={{name: 'testing name 1'}} 
        onSubmit={(values)=>{
            action('form submit')(JSON.stringify(values));
        }}>
        <Form autoComplete="off">
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <Field name="name" label="Name" 
                        options={['testing name 1', 'testing name 2', 'testing name 3']}
                        component={TechAutocompleteField}/>
                </Grid>
                <Grid item>
                    <TechButton type="submit">Submit</TechButton>
                </Grid>
            </Grid>
        </Form>
    </Formik>
)