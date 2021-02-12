import { HIDE_MESSAGE, AVAILABLE, SOLD, USER } from './type';

export const availableSeat = seat_num => ({
    type: AVAILABLE,
    seat_num,
});

export const soldSeat = seat_num => ({
    type: SOLD,
    payload: {
        seat_num,
        styles: {
            backgroundColor: '#F8D7DA',
            color: '#721C24',
        },
    },
});

export const userSeat = seat_num => ({
    type: USER,
    payload: {
        seat_num,
        styles: {
            backgroundColor: '#ffeb00ab',
            color: 'black',
        },
    },
});

export const hideMessage = () => ({
    type: HIDE_MESSAGE,
});
