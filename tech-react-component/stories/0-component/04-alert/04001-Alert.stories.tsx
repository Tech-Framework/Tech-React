import React from 'react'
import { Dialog, DialogContent, DialogActions } from '@material-ui/core'

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
                <button onClick={()=>{this.setState({open: true})}}>
                    Show Alert
                </button>
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