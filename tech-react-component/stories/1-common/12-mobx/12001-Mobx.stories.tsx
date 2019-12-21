import * as React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx"

export default {
    title: 'Common|Mobx/Observable',
}

@observer
class MobxComponent extends React.Component{

    @observable
    counter: number = 0;

    render(){
        return (
            <div>
                <div>{this.counter}</div>
                <button onClick={()=>{this.counter++}}>Increase Counter</button>
            </div>
        )
    }
}

export const example = () => (
    <div>
        <MobxComponent></MobxComponent>
    </div>
);