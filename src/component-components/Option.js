import React from 'react';

const Option = ({children, active, onSelect}) => (
    <div style={{
        width: 100,
        textAlign: 'center',
        border: '1px solid black',
        cursor: 'pointer',
        color: active ? 'blue' : 'black'
    }} onClick={onSelect}>
        {children}
    </div>
);

export default Option;