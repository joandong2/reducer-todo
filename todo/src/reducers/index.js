export const initialState = [
    {
        item: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
    {
        item: "Cook Dishes",
        completed: false,
        id: 3892987590,
    },
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("TOGGLE_EDITING");
            return {
                ...state,
                editing: !state.editing,
            };
        default:
            return state;
    }
    return state;
};
