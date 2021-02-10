export default (state, action) => {
    console.log(action);

    switch (action.type) {
        default:
            console.log('somthing went wrong');
    }
};
