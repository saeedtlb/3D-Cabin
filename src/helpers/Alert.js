import React, { useEffect, useRef } from 'react';

import { useGlobalState, useGlobalDispatch } from '../context/globalContext';

import { hideMessage } from '../actions/action';

const Alert = () => {
    const { seat_num, show_message, styles } = useGlobalState(); // if we get styles it means that seat has alredy sold
    const dispatch = useGlobalDispatch();
    const alert = useRef();

    useEffect(() => {
        show_message && setTimeout(() => dispatch(hideMessage()), 3500);
    }, [show_message]);

    return (
        <div
            className={show_message ? 'alert alert_show' : 'alert'}
            ref={alert}
            style={styles && styles}
        >
            <div className='head'>{styles ? 'sorry!!!' : 'Successful'}</div>
            <div className='main'>
                {styles ? 'Already sold' : 'Register'} seat number
                <span style={{ fontWeight: 'bold' }}> {seat_num}</span>
            </div>
        </div>
    );
};

export default Alert;
