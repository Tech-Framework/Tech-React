import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { TechProps } from 'props/TechProps';
import { observer, inject } from 'mobx-react';
import { AlertStore } from 'store/AlertStore';

@inject('techAppStore')
@observer
export class TechAlert extends React.Component<TechProps> {

    private alertStore?: AlertStore;

    constructor(props: TechProps){
        super(props);
        this.alertStore = this.props?.techAppStore?.alertStore;
    }

    render(){
        return (
            <Dialog open={this.alertStore?.isShowAlert ? true : false}>
                <DialogContent>
                    <DialogContentText>
                        {this.alertStore?.message}
                    </DialogContentText>
                    <DialogActions>
                        <button onClick={()=>{this.alertStore?.next()}}>
                            ok
                        </button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        )
    }
}