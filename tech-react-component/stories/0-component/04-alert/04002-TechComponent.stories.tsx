import React from 'react'
import { Provider, observer, inject } from 'mobx-react'
import { TechAlert } from '../../../src/component/alert/TechAlert'
import { TechProps } from '../../../src/props/TechProps'
import { TechAppStore } from '../../../src/store/TechAppStore'
import { AlertStore } from '../../../src/store/AlertStore'
import { TechButton } from '../../../src/component/button/TechButton';

export default{
    title: 'Component|Alert/Layout',
}

const techAppStore = new TechAppStore();

@inject('techAppStore')
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
                <TechButton onClick={()=>{this.alertStore?.alert('testing')}}>
                    Alert Once
                </TechButton>
                <TechButton onClick={()=>{
                    this.alertStore?.alert('testing1');
                    this.alertStore?.alert('testing2');
                    this.alertStore?.alert('testing3');
                }}>
                    Alert Mutliple
                </TechButton>
            </div>
        )
    }
}

export const example = () =>(
    <Provider techAppStore={techAppStore}>
        <AlertExampleComponent></AlertExampleComponent>
        <TechAlert/>
    </Provider>
);