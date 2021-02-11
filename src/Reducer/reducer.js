import { CHOOSE_SEAT, HIDE_MESSAGE, AVAILABLE, SOLD } from '../actions/type';

export default (state, action) => {
    console.log(action);

    switch (action.type) {
        case CHOOSE_SEAT:
            const {
                seat_num,
                show_message,
                styles,
                seat_status,
            } = action.payload;

            const user_seat =
                seat_status === SOLD
                    ? state.user_seat
                    : state.user_seat.add(seat_num);

            return {
                ...state,
                seat_num,
                user_seat,
                show_message: show_message,
                styles: seat_status !== AVAILABLE ? styles : null,
            };
        case HIDE_MESSAGE:
            return {
                ...state,
                show_message: false,
                styles: null,
            };
        default:
            console.log('somthing went wrong');
    }
};
