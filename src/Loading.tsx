import React from 'react';
import { Spinner } from 'reactstrap';

const Loading: React.FunctionComponent = () => {
    return(
        <Spinner id="content" style={{ width: '3rem', height: '3rem' }} type="grow" />
    );

};

export default Loading;