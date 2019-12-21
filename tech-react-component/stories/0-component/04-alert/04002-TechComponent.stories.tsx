import React from 'react'
import { Provider, observer, inject } from 'mobx-react'
import { TechAlert } from 'component/alert/TechAlert'
import { TechAppStore } from 'store/TechAppStore'
import { TechProps } from 'props/TechProps'
import { AlertStore } from 'store/AlertStore'

export default{
    title: 'Component|Alert/Layout',
}

const techStore = new TechAppStore();

@inject('techStore')
@observer
class AlertExampleComponent extends React.Component<TechProps> {
    
    private alertStore?: AlertStore;

    constructor(props: TechProps){
        super(props);
        this.alertStore = this.props?.techAppStore?.alertStore;
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.alertStore?.alert('testing')}}>
                    Alert Once
                </button>
                <button onClick={()=>{
                    this.alertStore?.alert('testing1');
                    this.alertStore?.alert('testing2');
                    this.alertStore?.alert('testing3');
                }}>
                    Alert Mutliple
                </button>
            </div>
        )
    }
}

export const example = () =>(
    <Provider techStore={techStore}>
        <AlertExampleComponent></AlertExampleComponent>
        <TechAlert/>
    </Provider>
)