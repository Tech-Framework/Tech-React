import { TechAppStore } from 'store/TechAppStore';
import { AlertStore } from 'store/AlertStore';

export interface TechProps {
    techAppStore?: TechAppStore;
    alertStore?: AlertStore;

}