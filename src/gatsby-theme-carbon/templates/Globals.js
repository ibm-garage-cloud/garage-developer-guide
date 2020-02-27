import React from 'react';

const globals = {};
globals.longName   = "IBM Garage Cloud-native Toolkit";
globals.shortName  = "Cloud Native Toolkit";
globals.env  = "Developer Environment";

const Globals = ({name}) => {

    return (
        <>
            {globals[name]}
        </>
    )
};

Globals.get = (key) => {
    return globals[key];
};



Globals.set = (key, value) => {
    globals[key] = value;
}

Object.assign(Globals,globals);

export default Globals;

