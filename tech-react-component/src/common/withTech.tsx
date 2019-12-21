import { TechConsumer } from './TechConsumer'
import React, { ComponentType } from "react";
import { TechProps } from './TechProps';

export const withTech = () => {
    return (WrappedComponent: ComponentType<TechProps>) => {
        return class extends React.Component {
            render() {
                return (
                    <TechConsumer>
                        {
                            ({httpClient}) => <WrappedComponent 
                                httpClient={httpClient}/>
                        }
                    </TechConsumer>
                );
            }
          };
    }
}
  

