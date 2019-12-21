import { Field, Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { TechTextInputField } from 'form/text-input/TechTextInputField';
import { TechButton } from 'component/button/TechButton';
import { Grid } from '@material-ui/core';
import React from 'react';

export default {
    title: 'Component|Text Input/Form',
};

export const TextInputField = () => (
    <Formik initialValues={{name: 'testing name1'}} 
        onSubmit={(values)=>{
            action('form submit')(JSON.stringify(values));
        }}>
        <Form autoComplete="off">
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <Field name="name" label="Name" component={TechTextInputField}/>
                </Grid>
                <Grid item>
                    <TechButton type="submit">Submit</TechButton>
                </Grid>
            </Grid>
        </Form>
    </Formik>
)