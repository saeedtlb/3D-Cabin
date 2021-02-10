import React from 'react';

const Alert = () => {
    return (
        <div className='alert'>
            <div className='head'>Successful</div>
            <div className='main'>
                Register seat number{' '}
                <span style={{ fontWeight: 'bold' }}>4B</span>
            </div>
        </div>
    );
};

export default Alert;
