import React from 'react';
import { observer } from "mobx-react";
import { inject, Provider } from 'mobx-react';
import { observable } from 'mobx';

export default {
    title: 'Common|Mobx/Provider',
}

class SimpleStore {

    @observable
    message: string = 'Testing';

}

@inject("store")
@observer
class MobxComponent extends React.Component<{store?: SimpleStore}>{

    render(){
        return (
            <div>
                <div>{this.props?.store?.message}</div>
            </div>
        )
    }
}

class MobxProviderComponent extends React.Component{

    store = new SimpleStore();

    constructor(props: {}){
        super(props);
    }

    updateMessage(){
        this.store.message = 'Updated ' + this.store.message; 
    }

    render(){
        return (
            <div>
                <Provider store={this.store}>
                    <MobxComponent></MobxComponent>
                </Provider>
                <button onClick={ ()=>{ this.updateMessage() }}>Update Message</button>
            </div>
        )
    }
}

export const example = () => (
    <MobxProviderComponent></MobxProviderComponent>
)