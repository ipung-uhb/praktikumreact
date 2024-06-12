import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const MainContent = (props) => {
    return (
        <main>
            <FunctionalComponent message={props.message}/>
            <ClassComponent />
        </main>
    );
}

export default MainContent;
