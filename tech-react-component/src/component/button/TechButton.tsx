import Button from '@material-ui/core/Button';
import * as React from "react";
import { TechButtonProps } from './TechButtonProps';

export const TechButton: React.SFC<TechButtonProps> = props => {
    console.log(props);
    return  (
        <Button variant="contained" type={props.type} style={{textTransform: 'none'}} {...props}> 
            {props.children}
        </Button>
    );
};

