import { ButtonProps } from '@material-ui/core/Button/Button';

export interface TechButtonProps extends ButtonProps{
    /** Content of the Button */
    children?: string;
    /** Type of the Button  */
    type?: 'submit' | 'reset' | 'button' ;
}