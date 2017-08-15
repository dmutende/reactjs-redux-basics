
const userReducer = (state = {
    name: "elon",
    age: 20
}, action) => {
    switch(action.type){
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;