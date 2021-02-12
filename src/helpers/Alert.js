import React, { useEffect, useRef } from 'react';

import { useGlobalState, useGlobalDispatch } from '../context/globalContext';

import { hideMessage } from '../actions/action';

const Alert = () => {
    const { seat_num, show_message, styles } = useGlobalState();
    const dispatch = useGlobalDispatch();
    const alert = useRef();

    useEffect(() => {
        show_message.status && setTimeout(() => dispatch(hideMessage()), 3500);
    }, [show_message]);

    return (
        <div
            className={show_message.status ? 'alert alert_show' : 'alert'}
            ref={alert}
            style={styles && styles}
        >
            <div className='head'>{show_message.head}</div>
            <div className='main'>
                {show_message.body} seat number
                <span style={{ fontWeight: 'bold' }}> {seat_num}</span>
            </div>
        </div>
    );
};

export default Alert;
