import { CHOOSE_SEAT, HIDE_MESSAGE, AVAILABLE, SOLD, USER } from './type';

export const selectSeat = (seat_num, type = AVAILABLE) => {
    let returnObj = {
        type: CHOOSE_SEAT,
        payload: {
            seat_num,
            show_message: true,
            seat_status: type,
        },
    };

    if (type === SOLD) {
        returnObj.payload.styles = {
            backgroundColor: '#F8D7DA',
            color: '#721C24',
        };
    } else if (type === USER) {
        returnObj.payload.styles = {
            backgroundColor: 'sandybrown',
            color: 'brown',
        };
    }
    return returnObj;
};

export const hideMessage = () => ({
    type: HIDE_MESSAGE,
});
