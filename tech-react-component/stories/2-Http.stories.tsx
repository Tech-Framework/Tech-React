import * as React from 'react';
import { withTech } from '../src/common/withTech';
import { TechProps } from '../src/common/TechProps';
import { TechProvider } from 'common/TechProvider';
import { httpClient } from 'http/httpClient';
import MockAdapter  from 'axios-mock-adapter';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Http',
};

@(withTech() as any)
class TestHttpClientComponent extends React.Component<TechProps, any> {
    
    callSomething(){
        this.props.httpClient?.get('testing').then((val)=>{
            action('http reponse')(val.data);
        })
    }

    render(){
        return (
            <div>
                <button onClick={()=>{this.callSomething()}}>Ajax Call for Mock Data</button>
            </div>
        )
    }
}

const mockHttpClientAdapter = new MockAdapter(httpClient) 
mockHttpClientAdapter.onGet('testing').reply(200, 'testing reponse');

export const HttpClientComponent = () => (
    <TechProvider value={{httpClient: httpClient}}>
        <TestHttpClientComponent/>
    </TechProvider>
);
  