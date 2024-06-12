import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const MainContent = (props) => {
    return (
        <main>
            <FunctionalComponent message={props.message} numvalue={props.numvalue}/>
            <ClassComponent info={props.info}/>
        </main>
    );
}

export default MainContent;
