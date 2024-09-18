import React from 'react';

const Screen = ({ display }) => {
    return ( <
        div className = "p-4 bg-gray-200" >
        <
        h2 > Calculator < /h2> <
        div > { display } < /div> <
        /div>
    );
};

export default Screen;