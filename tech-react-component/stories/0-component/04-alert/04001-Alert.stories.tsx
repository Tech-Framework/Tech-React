import React from 'react'
import { Dialog, DialogContent, DialogActions } from '@material-ui/core'
import { TechButton } from '../../../src/component/button/TechButton';

export default {
    title: 'Component|Alert/Material UI',
}

interface DialogStateType {
    open : boolean;
}

class DialogExample extends React.Component<any, DialogStateType> {
    
    constructor(props: any){
        super(props);
        this.state = {
            open: false
        }
    }
    
    render(){
        return (
            <div>
                <TechButton onClick={()=>{this.setState({open: true})}}>
                    Show Alert
                </TechButton>
                <Dialog 
                    open={this.state.open}>
                    <DialogContent>Testing</DialogContent>
                    <DialogActions>
                        <button onClick={()=>{this.setState({open: false})}}>ok</button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export const Alert = ()=> (
    <DialogExample></DialogExample>
)