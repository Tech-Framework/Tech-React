import React from 'react';
import { Field, Formik, Form } from 'formik';
import { action } from '@storybook/addon-actions';
import { TechTextInputField } from 'form/text-input/TechTextInputField';
import { TechButton } from 'component/button/TechButton';

export default {
    title: 'Text Input',
};

export const TextInput = () => (
    <Formik initialValues={{name: 'testing name1'}} 
        onSubmit={(values)=>{
            action('form submit')(JSON.stringify(values));
        }}>
        <Form autoComplete="off">
            <Field name="name" label="Name" component={TechTextInputField}/>
            <TechButton type="submit">Submit</TechButton>
        </Form>
    </Formik>
)