import { HIDE_MESSAGE, AVAILABLE, SOLD, USER } from '../actions/type';

export default (state, action) => {
    console.log(action);

    switch (action.type) {
        case AVAILABLE:
            return {
                ...state,
                seat_num: action.seat_num,
                user_seat: state.user_seat.add(action.seat_num),
                show_message: {
                    status: true,
                    head: 'Successful',
                    body: 'Register',
                },
                styles: null,
            };
        case USER:
            state.user_seat.delete(action.payload.seat_num);
            return {
                ...state,
                seat_num: action.payload.seat_num,
                styles: action.payload.styles,
                show_message: {
                    status: true,
                    head: 'Remove',
                    body: 'Remove your',
                },
            };
        case SOLD:
            return {
                ...state,
                seat_num: action.payload.seat_num,
                styles: action.payload.styles,
                show_message: {
                    status: true,
                    head: 'Sorry!!!',
                    body: 'Already sold',
                },
            };
        case HIDE_MESSAGE:
            return {
                ...state,
                show_message: {
                    status: false,
                },
            };
        default:
            console.log('somthing went wrong');
    }
};
