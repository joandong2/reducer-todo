export const initialState = [
    {
        todo: "Learn about reducers",
        completed: false,
        id: 3892987589,
    },
];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("ADD_TODO");
            return [...state, action.payload];
        default:
            return state;
    }
};
