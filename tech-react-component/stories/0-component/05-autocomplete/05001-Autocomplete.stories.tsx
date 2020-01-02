import { TechAutocomplete } from '../../../src/component/autocomplete/TechAutocomplete'
import React from 'react'

export default {
    title: 'Component|Autocomplete/Layout'
}

export const example = () => (
    <TechAutocomplete label="Testing Autocomplete" 
        options={['Testing1', 'Testing2', 'Testing3']}/>
)