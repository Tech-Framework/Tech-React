import * as React from 'react';
import { httpClient } from 'http/httpClient';
import MockAdapter  from 'axios-mock-adapter';
import { action } from '@storybook/addon-actions';
import { TechProps } from 'props/TechProps';
import { AxiosInstance } from 'axios';
import { Provider, inject } from 'mobx-react';

export default {
    title: 'Common|Axio/Http Client',
};

@inject('techStore')
class TestHttpClientComponent extends React.Component<TechProps, any> {
    
    private httpClient?: AxiosInstance;

    constructor(props: TechProps){
        super(props);
        this.httpClient = this.props.techAppStore?.httpClient;
    }

    callSomething(){
        this.httpClient?.get('testing').then((val)=>{
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
    <Provider techStore={{httpClient: httpClient}}>
        <TestHttpClientComponent/>
    </Provider>
);
  