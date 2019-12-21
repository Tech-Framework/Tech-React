import * as React from 'react';
import { httpClient } from 'http/httpClient';

export const TechContext = React.createContext({
    httpClient: httpClient
});
