import { TechBaseStore } from './base/TechBaseStore';
import { computed, action, observable } from 'mobx';

export class AlertStore extends TechBaseStore{

    @observable
    toAlertMessageList: string[] = [];    

    @observable
    message: string = '';

    @computed
    get isShowAlert(): boolean {
        if (this.toAlertMessageList && this.toAlertMessageList.length > 0){
            return true;
        }
        return false;
    }

    @action
    next(): void {
        this.toAlertMessageList.shift();
        if (this.toAlertMessageList && this.toAlertMessageList.length > 0){
            this.message = this.toAlertMessageList[0];
        }
    }

    @action
    alert(message: string){
        this.toAlertMessageList.push(message);
        if (this.toAlertMessageList && this.toAlertMessageList.length > 0){
            this.message = this.toAlertMessageList[0];
        }
    }


}