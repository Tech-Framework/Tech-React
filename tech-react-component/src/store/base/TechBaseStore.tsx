import { TechAppStore } from 'store/TechAppStore';

export abstract class TechBaseStore {

    constructor(protected techStore: TechAppStore){

    }

}